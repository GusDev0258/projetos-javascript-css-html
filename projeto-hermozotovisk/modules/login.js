import requestData from "./requestData.js";
export default function logarUsuario() {
  function $(argument) {
    return document.querySelector(argument);
  }
  function getValues() {
    const userInput = $("#user-login");
    const userPassword = $("#user-password");
    return {
      name: userInput.value,
      password: userPassword.value,
    };
  }
  const btn = $(".btn-login");
  async function realizaLogin() {
    if (btn) {
      const valores = getValues();
      let insertedName = valores.name;
      let insertedPassword = valores.password;
      const response = await requestData();
      const vendedores = response.Vendedores;
      let vendedorName = vendedores[0]["name"];
      let vendedorSenha = vendedores[0]["password"];
      if (insertedName === vendedorName && insertedPassword == vendedorSenha) {
        window.location.href = "./pages/home.html";
      } else {
        alert("Usuário ou Senha errados");
        location.reload();
      }
    }
  }
  if (btn) btn.addEventListener("click", realizaLogin);
}
