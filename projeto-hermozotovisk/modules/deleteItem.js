export default function deleteItem() {
  let btnExcluirLista = document.querySelectorAll(".btn-excluir");
  let botoes = [...btnExcluirLista];
  function getBotao(event) {
    const btnExcluir = event.target;
    const idSelecionado = btnExcluir.parentElement.children[0].innerText;
    const resgataProdutos = JSON.parse(localStorage.getItem("produtos"));
    resgataProdutos.forEach((produto, index) => {
      const productData = Object.values(produto);
      let productId = productData[0];
      if (productId == idSelecionado) {
        resgataProdutos.splice(index, 1);
        localStorage.setItem("produtos", JSON.stringify(resgataProdutos));
        location.reload();
        return false;
      } else {
        console.log("não é igual");
      }
    });
  }
  botoes.forEach((botao) => {
    botao.addEventListener("click", getBotao);
  });
}
