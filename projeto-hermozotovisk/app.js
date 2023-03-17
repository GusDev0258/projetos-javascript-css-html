import login from "./modules/login.js";
import showSubMenu from "./modules/showSubMenu.js";
import insertData from "./modules/inputData.js";
import loadData from "./modules/loadData.js";
const btnAdd = document.querySelector(".modal-adicionar");
const btnLogin = document.querySelector(".btn-login");

if (btnAdd) {
  insertData();
}
window.onload = loadData();

if (btnLogin) {
  login();
}

const showCadastroMenu = new showSubMenu(
  ".nav-item.cadastro",
  ".sub-menu.cadastro"
);
showCadastroMenu.adicionaEventoAoBotao("click");
const showRelatoriosMenu = new showSubMenu(
  ".nav-item.relatorios",
  ".sub-menu.relatorios"
);
showRelatoriosMenu.adicionaEventoAoBotao("click");
const showExclusaoMenu = new showSubMenu(
  ".nav-item.exclusao",
  ".sub-menu.exclusao"
);
showExclusaoMenu.adicionaEventoAoBotao("click");
