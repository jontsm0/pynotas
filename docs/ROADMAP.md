# Roadmap do Py.Notas

Um plano de construção, sem datas prometidas. Os itens marcados existem no código atual; as verificações realizadas estão em [VERIFICACAO.md](VERIFICACAO.md).

## 1. Primeira versão — base disponível

- [x] Criar a página com editor e painel de saída.
- [x] Executar Python no navegador com Pyodide.
- [x] Adicionar cores, numeração de linhas e indentação ao editor.
- [x] Receber respostas de `input()` pelo campo stdin.
- [x] Executar, interromper e limpar a saída.
- [x] Salvar código e respostas no navegador.
- [x] Adaptar a disposição dos painéis para telas menores.
- [x] Incluir manifesto, ícones e cache do app.

## 2. Apresentação e organização

- [x] Reescrever o README com a história e a proposta do projeto.
- [x] Mostrar uma demonstração real em GIF e imagem.
- [x] Documentar uso, pastas, limitações e execução local.
- [x] Adicionar licença MIT e orientações de contribuição.
- [x] Separar documentação, mídia e exemplos.
- [x] Incluir modelos de issues para problemas e sugestões.

## 3. Próxima prioridade — confiança no uso diário

- [ ] Diferenciar sucesso e erro no status após executar um programa.
- [ ] Oferecer uma nova tentativa quando o carregamento do Python falhar.
- [ ] Avisar quando o navegador não conseguir salvar o rascunho.
- [ ] Limitar ou paginar saídas muito grandes para evitar lentidão.
- [ ] Liberar os objetos Python temporários após cada execução.
- [ ] Conferir navegação por teclado, foco e leitura por tecnologias assistivas.
- [ ] Testar em iPhone/Safari e Android/Chrome, incluindo teclado virtual.
- [ ] Validar instalação e uso offline em aparelhos reais.

Critério para concluir esta etapa: os cenários devem ser reproduzidos, corrigidos quando necessário e registrados com o resultado obtido.

## 4. Facilitar a prática

- [ ] Importar um arquivo `.py` para o editor.
- [ ] Baixar o código como arquivo `.py`.
- [ ] Ajustar o tamanho da fonte sem sair do app.
- [ ] Melhorar a inserção de indentação e símbolos no celular.
- [ ] Disponibilizar alguns exemplos curtos para começar.

## 5. Manutenção

- [ ] Criar testes automatizados para execução, entrada, interrupção e persistência.
- [ ] Documentar e conferir o fluxo de publicação no Netlify.
- [ ] Revisar as atualizações do Pyodide com testes antes de trocar a versão.
- [ ] Avaliar novas funções sem tornar a tela mais complicada.

Cadastro, assinaturas e recursos sociais não fazem parte deste plano. O foco continua sendo abrir o app e praticar Python.
