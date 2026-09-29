# 🐍 Pynotas

Um editor/terminal Python no navegador, com visual inspirado em terminal, realce de sintaxe e execução de código via Pyodide (WebAssembly).

## 🚀 Acesse o app publicado

> **Demo online:** **https://pynotas-app.netlify.app/**

---

## ✨ Funcionalidades principais

- Editor de código Python com destaque de sintaxe
- Numeração de linhas e indentação automática
- Atalho para executar (`Ctrl+Enter` ou `⌘+Enter`)
- Área de `stdin` (uma linha por `input`)
- Painel de saída com status de execução
- Persistência local do código e entrada (`localStorage`)
- Suporte PWA (manifest + service worker)

## 🧱 Stack e tecnologias

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Web Worker**
- **Pyodide** (carregado via CDN)
- **PWA** (`manifest.webmanifest` + `sw.js`)

## 📁 Estrutura de pastas

```text
pynotas/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── icons/
│   │   ├── icon-180.png
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   └── js/
│       ├── app.js
│       └── worker.js
├── index.html
├── manifest.webmanifest
├── sw.js
└── README.md
```

## ▶️ Execução local

Como é um app estático, basta servir os arquivos com um servidor HTTP local.

### Opção 1: Python

```bash
python -m http.server 8000
```

Depois, abra: `http://localhost:8000`

### Opção 2: VS Code Live Server

Abra o projeto e execute com a extensão **Live Server**.

## 🛠️ Como alterar/contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua alteração
3. Faça mudanças pequenas e focadas
4. Teste localmente (execução de código, `stdin`, output e persistência)
5. Abra um Pull Request descrevendo o que mudou

## 🌐 Deploy / publicação

O projeto está publicado em:

- **Netlify**: https://pynotas-app.netlify.app/

Para novos deploys, mantenha os caminhos relativos corretos de `index.html`, `manifest.webmanifest`, `sw.js` e `assets/`.

## 📌 Status e licença

- **Status:** ativo
- **Licença:** não identificada no repositório até o momento
