export default class showSubMenu {
  constructor(btnTarget, subMenuTarget) {
    this.btnCadastro = document.querySelector(btnTarget);
    this.subMenuCadastro = document.querySelector(subMenuTarget);
    this.mostrarSubMenu = this.mostrarSubMenu.bind(this);
  }
  mostrarSubMenu(event) {
    event.preventDefault();
    this.subMenuCadastro.classList.toggle("ativo");
  }
  adicionaEventoAoBotao(event) {
    if(this.btnCadastro)
    this.btnCadastro.addEventListener(event, this.mostrarSubMenu);
  }
}
