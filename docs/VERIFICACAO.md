# Verificação desta revisão

Revisão de documentação realizada em 4 de outubro de 2026.

## Conferido no site publicado

Endereço: https://pynotas-app.netlify.app/

| Cenário | Resultado observado |
| --- | --- |
| Abrir o app no navegador desktop | Editor, stdin e painel de saída disponíveis. |
| Carregar Python | Mensagem `python pronto`. |
| Executar `input()` e um laço `for` | Nome informado e três linhas exibidos corretamente. |
| Recarregar a página | Código e resposta de stdin preservados. |
| Capturar a demonstração | GIF montado com três capturas reais; imagem estática do resultado. |

## Conferido nos arquivos

- Links locais da documentação e arquivos de mídia presentes.
- Sintaxe dos três arquivos JavaScript validada com `node --check`.
- Manifesto lido como JSON válido.
- Exemplo Python executado com a entrada `Jon`.
- GIF conferido com três quadros e repetição habilitada.
- `git diff --check` sem erros de espaço em branco.

## O que não foi validado nesta revisão

- Aparelhos iOS e Android reais, teclado virtual e instalação.
- Funcionamento totalmente offline.
- Compatibilidade de bibliotecas adicionais.
- Automação de publicação no Netlify.

Esta revisão altera documentação, licença, exemplos e organização de arquivos de apoio. As melhorias de comportamento identificadas na leitura do código estão registradas no [roadmap](ROADMAP.md), sem serem marcadas como concluídas.
