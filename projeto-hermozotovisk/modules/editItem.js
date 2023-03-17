export default function editItem() {
  let btnEditarLista = document.querySelectorAll(".btn-editar");
  const modalContainer = document.querySelector(".modal-container-editar");
  const modal = document.querySelector(".produto-modal-editar");
  const btnFecharModal = document.querySelector(".close-button.editar");
  const btnCancelarModal = document.querySelector(".btn-cancelar.editar");
  const btnEdita = document.querySelector(".btn-adicionar.modal-editar");
  const nomeProduto = document.querySelector("#produtoNomeEditar");
  const precoProduto = document.querySelector("#produtoPrecoEditar");
  const catProduto = document.querySelector("#produtoCategoriaEditar");
  const qtdProduto = document.querySelector("#produtoQuantidadeEditar");
  const descProduto = document.querySelector("#produtoDescricaoEditar");
  let botoes = [...btnEditarLista];
  function toggleModal() {
    modalContainer.classList.toggle("ativo");
    modal.classList.toggle("ativo");
  }
  if (btnFecharModal) {
    btnFecharModal.addEventListener("click", toggleModal);
  }
  if (btnCancelarModal) {
    btnCancelarModal.addEventListener("click", toggleModal);
  }
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      let id;
      let idx;
      const btnEditar = event.target;
      const idSelecionado = btnEditar.parentElement.children[0].innerText;
      const resgataProdutos = JSON.parse(localStorage.getItem("produtos"));
      resgataProdutos.forEach((produto, index) => {
        const productData = Object.values(produto);
        const rawPrice = productData[2];
        const formatedPrice = rawPrice.slice(2, rawPrice.length - 3);
        let productId = productData[0];
        if (productId == idSelecionado) {
          id = productId;
          idx = index;
          nomeProduto.value = productData[1];
          precoProduto.value = formatedPrice;
          catProduto.value = productData[3];
          qtdProduto.value = productData[4];
          descProduto.value = productData[5];
        }
      });
      btnEdita.addEventListener("click", () => {
        resgataProdutos.forEach((produto, index) => {
          if (produto.id === id && index === idx) {
            produto.id = id;
            produto.nome = nomeProduto.value;
            produto.preco = `R$${precoProduto.value},00`;
            produto.categoria = catProduto.value;
            produto.quantidade = qtdProduto.value;
            produto.descricao = descProduto.value;
            return false;
          }
        });
        const arrayComProdutoEditado = JSON.stringify(resgataProdutos);
        localStorage.setItem("produtos", arrayComProdutoEditado);
        toggleModal();
        location.reload();
      });
      toggleModal();
    });
  });
}
