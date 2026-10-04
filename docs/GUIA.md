# Guia do projeto

## Abrir no seu computador

Para apenas usar o Py.Notas, basta [abrir o site](https://pynotas-app.netlify.app/). Os passos abaixo são para quem quer modificar o projeto.

Você precisa de Git e Python 3 instalados. No terminal:

```bash
git clone https://github.com/jontsm0/pynotas.git
cd pynotas
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador. No Windows, se `python3` não for reconhecido, use `py -m http.server 8000`. Para encerrar o servidor, pressione `Ctrl + C` no terminal.

Não abra o `index.html` com um clique duplo: o processo que executa Python precisa de um servidor local. Não há instalação de pacotes do projeto nem etapa de build. É necessário acesso à internet para carregar o Python na primeira visita.

## Onde encontrar cada coisa

| Caminho | O que guarda |
| --- | --- |
| `index.html` | A estrutura da tela e seus botões. |
| `assets/css/` | Cores, fontes e adaptação para telas menores. |
| `assets/js/app.js` | Editor, botões e salvamento do rascunho. |
| `assets/js/worker.js` | Carregamento e execução do Python. |
| `assets/icons/` | Ícones usados pelo site e pela instalação no aparelho. |
| `manifest.webmanifest` | Nome, ícones e opções de instalação do app. |
| `sw.js` | Cache dos arquivos do site. Fica na raiz para alcançar o app inteiro. |
| `docs/` | Guia, roadmap e registro da verificação. |
| `docs/media/` | GIF e imagem usados no README. |
| `examples/` | Exemplos pequenos para experimentar no editor. |
| `.github/ISSUE_TEMPLATE/` | Formulários de relato de problemas e sugestões. |
| `CONTRIBUTING.md` | Como propor mudanças e conferir seu funcionamento. |
| `LICENSE` | Licença do código do projeto. |

Os arquivos do app continuam em `assets/`; a documentação e suas imagens ficam em `docs/`. Essa separação mantém os endereços usados pelo site publicado.

## Usando input()

O Py.Notas não espera a digitação no painel de saída. Coloque as respostas em **stdin** antes de clicar em **run**, na mesma ordem das perguntas. Cada linha corresponde a uma chamada de `input()`.

O arquivo [primeiros-passos.py](../examples/primeiros-passos.py) usa uma resposta: escreva seu nome em **stdin** e execute.

## Limitações atuais

- O rascunho pertence ao navegador e ao endereço do site. A cópia local e o site publicado têm armazenamentos separados.
- Não há conta, sincronização, gerenciamento de vários arquivos ou botão para baixar `.py` nesta versão.
- As bibliotecas e funcionalidades disponíveis dependem do Pyodide. Nem todo programa de Python para desktop funciona no navegador.
- O app não possui um instalador de pacotes Python.
- O cache não é garantia de funcionamento offline completo. O carregamento inicial depende de `cdn.jsdelivr.net`; a fonte visual vem do Google Fonts.
- Programas com muita saída podem consumir memória e deixar a interface lenta. O botão **stop** interrompe o processo Python e inicia outro.
- A interface apresenta erros Python, mas o status de término ainda não distingue uma execução com erro de uma execução bem-sucedida.
- A interface se adapta a telas menores por CSS. Teclados virtuais e instalação devem ser conferidos em aparelhos iOS e Android reais.

## Publicação e cache

O app é um site estático. O endereço atual está no README. Não há configuração de deploy versionada neste repositório que comprove como o Netlify está conectado ao GitHub.

Ao alterar arquivos do app, atualize a versão `V` em `sw.js`, pois o cache atual prioriza a cópia já armazenada. Mudanças só em documentação não exigem essa troca.

## Dependências externas

- [Pyodide](https://pyodide.org/en/stable/): executa Python no navegador; a versão referenciada pelo app é `0.26.4`.
- [Geist](https://github.com/vercel/geist-font): família de fontes; o site carrega Geist Mono pelo Google Fonts.

A licença MIT na raiz cobre o código deste projeto. Dependências e fontes mantêm suas próprias licenças.
