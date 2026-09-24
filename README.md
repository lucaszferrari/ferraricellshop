# Ferrari cellshop

Controle de estoque de celulares, feito em **HTML, CSS e JavaScript puro** (sem frameworks, sem banco de dados) para a atividade *Evoluindo a Loja Simples* de Fundamentos Web.

**Autor:** Lucas Ferrari de Azevedo

## Como usar

Abra `fundamentos-web/index.html` no navegador. Não precisa instalar nada.

Os produtos existem só enquanto a página está aberta, como pede a atividade.

## O que foi feito

| Parte | Funcionalidade |
|-------|----------------|
| 1 | Rodapé com `<footer>` estilizado (fundo escuro, borda vermelha) |
| 2 | Botão **Remover** em cada produto |
| 3 | Botão **Editar**: preenche o formulário e atualiza o item existente, sem criar outro |
| 4 | Botão do formulário alterna entre *Adicionar produto* e *Salvar alterações* |
| 5 | Visual: botões numa área separada, espaçamento, hover e layout responsivo |
| Bônus 1 | Contador de produtos cadastrados |
| Bônus 2 | Mensagem "Nenhum produto cadastrado." quando a lista está vazia |
| Bônus 3 | Validação: quantidade deve ser maior que zero |

## Estrutura

```
fundamentos-web/
├── index.html   # estrutura da página
├── style.css    # estilos
└── script.js    # lógica (criar, editar, remover, contador, validação)
```

## Conceitos praticados

`querySelector`, `createElement`, `addEventListener`, eventos de clique e submit, `.value`, `.textContent`, `.appendChild()`, `.remove()` e manipulação do DOM.
