# Como contribuir

Você pode ajudar relatando um problema, sugerindo uma melhoria ou enviando uma mudança no código. Não precisa dominar o projeto inteiro.

## Relatar um problema

[Abra uma issue](https://github.com/jontsm0/pynotas/issues/new/choose), explique os passos, o que esperava e o que aconteceu. Inclua navegador e aparelho. Se possível, envie um exemplo curto de código, sem senhas ou informações pessoais.

## Mudar o código

1. Faça um fork e abra sua cópia conforme o [guia local](docs/GUIA.md).
2. Crie uma branch: `git switch -c minha-melhoria`.
3. Faça uma mudança pequena e explique o motivo.
4. Confira os cenários abaixo que forem afetados.
5. Abra um pull request para este repositório contando o que mudou e como verificou.

## Conferência antes de enviar

- Execute um `print()` e veja a saída.
- Teste `input()` com as respostas em stdin.
- Confira uma mensagem de erro, por exemplo com `1 / 0`.
- Interrompa um programa com `stop` e execute outro em seguida.
- Verifique que `clear` apaga apenas a saída.
- Recarregue a página e confira o rascunho salvo.
- Se mexer no layout, confira desktop e celular, inclusive com teclado aberto.
- Se mudar arquivos do app, atualize a versão do cache em `sw.js`.
- Se mudar documentação, confira links, imagens e se as funções descritas existem.

Ainda não há uma suíte de testes automatizados. Registre no pull request o que foi testado e o que não foi possível verificar.

## Organização

Use `assets/` para arquivos do app, `docs/` para documentação e `docs/media/` para suas imagens. Não envie senhas, arquivos `.env`, pastas de dependências ou arquivos pessoais.

As contribuições ao código do projeto seguem a [licença MIT](LICENSE).
