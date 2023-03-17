/*
 *TODO:
 *[]Usar a mesma função de criar a product row para dar render nos items na tela
 *[]Registar os items em um array de produtos
 *[]Buscar os items dentro do array e renderizar na tela
 */
import loadData from "./loadData.js";

export default function insertData() {
  //Inicialização das variáveis
  const btnAbrirModalAddProduto = document.querySelector(
    ".crud-actions .btn-adicionar"
  );
  const modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector(".produto-modal");
  const btnFecharModal = document.querySelector(".close-button");
  const btnCancelarModal = document.querySelector(".btn-cancelar");
  const btnAdicionaProduto = document.querySelector(".modal-adicionar");
  const nomeProduto = document.querySelector("#produtoNome");
  const precoProduto = document.querySelector("#produtoPreco");
  const catProduto = document.querySelector("#produtoCategoria");
  const qtdProduto = document.querySelector("#produtoQuantidade");
  const descProduto = document.querySelector("#produtoDescricao");
  const getTable = document.querySelector(".crud-list-items");
  let produtos;
  if (JSON.parse(localStorage.getItem("produtos")) == null) {
    produtos = [];
  } else {
    produtos = JSON.parse(localStorage.getItem("produtos"));
  }

  let aux;
  let produtoId = 1;
  let menor = 1;
  //Gerencia o modal de adicionar um produto
  function toggleModal() {
    nomeProduto.value = "";
    precoProduto.value = "";
    catProduto.value = "";
    qtdProduto.value = "";
    descProduto.value = "";
    modalContainer.classList.toggle("ativo");
    modal.classList.toggle("ativo");
  }
  function createProduct() {
    if (JSON.parse(localStorage.getItem("produtos")) != null) {
      const resgatarDados = JSON.parse(localStorage.getItem("produtos"));
      resgatarDados.forEach((produto) => {
        produtoId = produto.id;
        if (menor <= produtoId) {
          menor = produtoId;
          produtoId += 1;
        }
      });
      aux = produtoId;
    } else {
      aux = 1;
    }
    //Constroi o objeto
    let id = aux;
    let nome = nomeProduto.value;
    let preco = precoProduto.value;
    let categoria = catProduto.value;
    let quantidade = qtdProduto.value;
    let descricao = descProduto.value;
    const produto = {
      id,
      nome,
      preco: "R$" + preco + ",00",
      categoria,
      quantidade,
      descricao,
    };
    //Registra o produto no banco de dados (LS) e aumenta o Id para não ser o mesmo
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    return produto;
  }
  //Cria a linha de produto dentro da table
  function createProductRow() {
    const produto = createProduct();
    const ul = document.createElement("ul");
    ul.classList.add("crud-content");
    getTable.appendChild(ul);
    const productData = Object.values(produto);
    for (let i = 0; i < 6; i++) {
      let li = document.createElement("li");
      li.innerText = productData[i];
      ul.appendChild(li);
    }
    const botaoEditar = document.createElement("span");
    const botaoExcluir = document.createElement("span");
    botaoEditar.innerHTML = "edit";
    botaoExcluir.innerHTML = "delete";
    botaoEditar.classList.add("btn-editar", "material-symbols-outlined");
    botaoExcluir.classList.add("btn-excluir", "material-symbols-outlined");
    ul.appendChild(botaoEditar);
    ul.appendChild(botaoExcluir);
    toggleModal();
    location.reload();
  }

  //Botões funcionais
  if (btnAbrirModalAddProduto) {
    btnAbrirModalAddProduto.addEventListener("click", toggleModal);
  }
  if (btnFecharModal) {
    btnFecharModal.addEventListener("click", toggleModal);
  }
  if (btnCancelarModal) {
    btnCancelarModal.addEventListener("click", toggleModal);
  }
  if (btnAdicionaProduto) {
    btnAdicionaProduto.addEventListener("click", createProductRow);
  }
}
