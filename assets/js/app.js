var K='pyterm-v1',$=function(s){return document.querySelector(s)};
var S;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}
S=S||{c:'# aperte run (ou Ctrl+Enter)\nnome = input("Seu nome?")\nfor i in range(3):\n    print(f"Olá, {nome}! ({i + 1})")\n',i:'Ana'};
var ta=$('#ta'),hlEl=$('#hl'),gt=$('#g'),inp=$('#in'),out=$('#out'),stEl=$('#st'),rn=$('#rn');
ta.value=S.c;inp.value=S.i||'';
var KW='and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case'.split(' ');
var BI='print input len range int float str bool list dict set tuple sum min max abs sorted enumerate zip map filter open type isinstance round reversed any all format repr id iter next super object'.split(' ');
var RE=/(#.*)|("""[\s\S]*?"""|'''[\s\S]*?'''|[rbfRBF]{0,2}"(?:\\.|[^"\\\n])*"?|[rbfRBF]{0,2}'(?:\\.|[^'\\\n])*'?)|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_]\w*)\b/g;
function sp(c,t){return '<span class="'+c+'">'+t+'</span>'}
function hl(src){var prev='',s=src.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return s.replace(RE,function(m,c,st,n,id,off,full){
    if(c)return sp('c',c);if(st)return sp('s',st);if(n)return sp('n',n);
    var p=prev;prev=id;
    if(KW.indexOf(id)>-1)return sp('k',id);
    if(id==='True'||id==='False'||id==='None')return sp('n',id);
    if(p==='def')return sp('f',id);if(p==='class')return sp('t',id);
    if(id==='self')return sp('o',id);
    if(BI.indexOf(id)>-1)return sp('b',id);
    if(full.charAt(off+id.length)==='(')return sp('f',id);
    return id})}
function sync(){hlEl.style.transform='translate('+(-ta.scrollLeft)+'px,'+(-ta.scrollTop)+'px)';gt.scrollTop=ta.scrollTop}
function paint(){var v=ta.value,n=v.split('\n').length,g='';for(var i=1;i<=n;i++)g+=i+'\n';
  hlEl.innerHTML=hl(v)+'\n';gt.textContent=g;sync()}
var tm;function persist(){clearTimeout(tm);tm=setTimeout(function(){try{localStorage.setItem(K,JSON.stringify({c:ta.value,i:inp.value}))}catch(e){}},300)}
ta.addEventListener('input',function(){paint();persist()});inp.addEventListener('input',persist);
ta.addEventListener('scroll',sync);
ta.addEventListener('keydown',function(e){var s=ta.selectionStart,v=ta.value;
  if((e.metaKey||e.ctrlKey)&&e.key==='Enter'){e.preventDefault();toggle();return}
  if(e.key==='Tab'){e.preventDefault();ta.setRangeText('    ',s,ta.selectionEnd,'end');ta.dispatchEvent(new Event('input'))}
  else if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();var ln=v.slice(v.lastIndexOf('\n',s-1)+1,s),ind=ln.match(/^\s*/)[0];if(/:\s*$/.test(ln))ind+='    ';
    ta.setRangeText('\n'+ind,s,ta.selectionEnd,'end');ta.dispatchEvent(new Event('input'))}});
var w,running=false,ready=false,t0;
function st(t,c){stEl.textContent=t;stEl.className=c||''}
function put(t,err){var s=document.createElement('span');if(err)s.className='e';s.textContent=t+'\n';out.appendChild(s);out.scrollTop=out.scrollHeight}
function ui(){rn.firstChild.nodeValue=running?'stop':'run'}
function boot(){ready=false;st('carregando python (na primeira vez leva alguns segundos)...');w=new Worker('assets/js/worker.js');
  w.onmessage=function(ev){var d=ev.data;
    if(d.ready){ready=true;st(running?'executando...':'python pronto')}
    if(d.fail){st('não foi possível carregar o python. verifique a conexão.','er');running=false;ui()}
    if(d.o!=null)put(d.o);if(d.e!=null)put(d.e,1);
    if(d.done){running=false;ui();st('concluído em '+((performance.now()-t0)/1000).toFixed(2).replace('.',',')+' s','ok')}};
  w.onerror=function(){st('erro ao iniciar o python','er');running=false;ui()}}
function run(){out.textContent='';running=true;ui();t0=performance.now();if(ready)st('executando...');
  w.postMessage({code:ta.value,stdin:inp.value?inp.value.split('\n'):[]})}
function stop(){w.terminate();running=false;ui();put('[execução interrompida]',1);boot()}
function toggle(){if(running)stop();else run()}
rn.onclick=toggle;
$('#cl').onclick=function(){out.textContent='';if(!running)st(ready?'python pronto':stEl.textContent)};
paint();boot();
if('serviceWorker' in navigator)addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
