// Referências dos elementos que já existem no HTML
const formProduto = document.querySelector("#form-produto");
const listaProdutos = document.querySelector("#lista-produtos");
const campoNome = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoQuantidade = document.querySelector("#quantidade");
const botaoForm = document.querySelector("#botao-form");
const tituloForm = document.querySelector("#titulo-form");
const erroQuantidade = document.querySelector("#erro-quantidade");
const contador = document.querySelector("#contador");
const listaVazia = document.querySelector("#lista-vazia");

// Item (<li>) que está sendo editado; null = modo "adicionar"
let itemEmEdicao = null;

// Formata o texto exibido no item
function formatarTexto(nome, preco, quantidade) {
  return `${nome} - R$ ${Number(preco).toFixed(2).replace(".", ",")} (${quantidade} un.)`;
}

// Atualiza contador e mensagem de lista vazia
function atualizarResumo() {
  const total = listaProdutos.children.length;
  contador.textContent = `Produtos cadastrados: ${total}`;
  listaVazia.hidden = total > 0;
}

// Volta o formulário ao estado normal (adicionar)
function sairDoModoEdicao() {
  itemEmEdicao = null;
  botaoForm.textContent = "Adicionar produto";
  tituloForm.textContent = "Novo celular";
  formProduto.reset();
}

// Cria um <li> com texto e botões Editar/Remover
function criarItem(nome, preco, quantidade) {
  const item = document.createElement("li");
  // Guarda os dados crus no próprio item para poder editar depois
  item.dataset.nome = nome;
  item.dataset.preco = preco;
  item.dataset.quantidade = quantidade;

  const texto = document.createElement("span");
  texto.className = "texto-produto";
  texto.textContent = formatarTexto(nome, preco, quantidade);

  const botaoEditar = document.createElement("button");
  botaoEditar.type = "button";
  botaoEditar.className = "btn-editar";
  botaoEditar.textContent = "Editar";
  botaoEditar.addEventListener("click", function () {
    itemEmEdicao = item;
    campoNome.value = item.dataset.nome;
    campoPreco.value = item.dataset.preco;
    campoQuantidade.value = item.dataset.quantidade;
    botaoForm.textContent = "Salvar alterações";
    tituloForm.textContent = "Editar celular";
    erroQuantidade.hidden = true;
    campoNome.focus();
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.className = "btn-remover";
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", function () {
    // Se removeu o item que estava em edição, cancela a edição
    if (item === itemEmEdicao) sairDoModoEdicao();
    item.remove();
    atualizarResumo();
  });

  const acoes = document.createElement("div");
  acoes.className = "acoes";
  acoes.append(botaoEditar, botaoRemover);

  item.append(texto, acoes);
  return item;
}

formProduto.addEventListener("submit", function (evento) {
  // Sem isso, o navegador recarregaria a página ao enviar o formulário
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const preco = campoPreco.value;
  const quantidade = campoQuantidade.value;

  // Validação: quantidade precisa ser maior que zero
  if (Number(quantidade) <= 0) {
    erroQuantidade.hidden = false;
    return;
  }
  erroQuantidade.hidden = true;

  if (itemEmEdicao) {
    // Atualiza o item existente, sem criar outro
    itemEmEdicao.dataset.nome = nome;
    itemEmEdicao.dataset.preco = preco;
    itemEmEdicao.dataset.quantidade = quantidade;
    itemEmEdicao.querySelector(".texto-produto").textContent = formatarTexto(nome, preco, quantidade);
    sairDoModoEdicao();
    return;
  }

  listaProdutos.appendChild(criarItem(nome, preco, quantidade));
  atualizarResumo();
  formProduto.reset();
});

// Produtos iniciais
[
  ["iPhone 17 Pro", 9499.0, 5],
  ["iPhone 17 Pro Max", 10999.0, 3],
  ["iPhone 17", 7299.0, 8],
  ["Galaxy S25 Ultra", 8499.0, 4],
].forEach(([nome, preco, quantidade]) => listaProdutos.appendChild(criarItem(nome, preco, quantidade)));
atualizarResumo();
