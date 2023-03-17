import deleteItem from "./deleteItem.js";
import editItem from "./editItem.js";

export default function loadData() {
  function carregarDados() {
    const getTable = document.querySelector(".crud-list-items");
    if (localStorage.length > 0 && getTable) {
      const resgataProdutos = JSON.parse(localStorage.getItem("produtos"));
      resgataProdutos.forEach((produto) => {
        const ul = document.createElement("ul");
        ul.classList.add("crud-content");
        getTable.appendChild(ul);
        const productData = Object.values(produto);
        productData.forEach((data) => {
          let li = document.createElement("li");
          li.innerText = data;
          ul.appendChild(li);
        });
        const botaoEditar = document.createElement("span");
        const botaoExcluir = document.createElement("span");
        botaoEditar.innerHTML = "edit";
        botaoExcluir.innerHTML = "delete";
        botaoEditar.classList.add("btn-editar", "material-symbols-outlined");
        botaoExcluir.classList.add("btn-excluir", "material-symbols-outlined");
        ul.appendChild(botaoEditar);
        ul.appendChild(botaoExcluir);
      });
      editItem();
      deleteItem();
    } else {
      console.log("O local Storage não possui nenhum Objeto");
    }
  }
  return carregarDados();
}
