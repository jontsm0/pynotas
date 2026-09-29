importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js');
let py;
const ready = loadPyodide().then(p => {
  py = p;
  py.setStdout({ batched: s => postMessage({ o: s }) });
  py.setStderr({ batched: s => postMessage({ e: s }) });
  postMessage({ ready: 1 });
}).catch(err => postMessage({ fail: String(err) }));
onmessage = async ev => {
  await ready;
  if (!py) return;
  const fila = ev.data.stdin.slice();
  py.setStdin({ stdin: () => (fila.length ? fila.shift() : undefined) });
  try {
    await py.runPythonAsync(ev.data.code, { globals: py.globals.get('dict')() });
  } catch (err) {
    let m = String(err.message || err);
    const i = m.indexOf('File "<exec>"');
    if (i > 0) m = 'Traceback (most recent call last):\n  ' + m.slice(i);
    postMessage({ e: m });
  }
  postMessage({ done: 1 });
};
