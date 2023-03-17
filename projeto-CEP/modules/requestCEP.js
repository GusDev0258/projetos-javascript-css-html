export default function requestDATA(){
    const botaoPesquisar = document.querySelector('.btn');

    async function requisitarDados(){
        const input = document.querySelector('#cep');
        const dados = input.value;
        const modal = document.querySelector('.modal');
        const modalContainer = document.querySelector('.modal-container');
        const btnFechar = document.querySelector('.fechar');
        const cep = document.querySelector('.cep-informado');
        const logradouro = document.querySelector('.logradouro');
        const cidade = document.querySelector('.cidade');
        const estado = document.querySelector('.estado');
        const bairro = document.querySelector('.bairro');
        const requisicao = await fetch(`https://viacep.com.br/ws/${dados}/json`);
        console.log(requisicao)
        const requisicaoJSON = await requisicao.json();
        console.log(requisicaoJSON);
        debugger;
        if(requisicaoJSON.cep != ""){
        cep.innerText = requisicaoJSON.cep;
        }
        if(requisicaoJSON.logradouro != ""){
            logradouro.innerText = requisicaoJSON.logradouro;
        }else{
            console.log('nao tem')
        }
        if(requisicaoJSON.bairro != ""){
            bairro.innerText = requisicaoJSON.bairro
        }else{
            console.log('nao tem')
        }
        if(requisicaoJSON.localidade != ""){
            cidade.innerText = requisicaoJSON.localidade;
        }else{
            console.log('nao tem')
        }
        if(requisicaoJSON.uf != ""){
            estado.innerText = requisicaoJSON.uf;
        }else{
            console.log('nao tem')
        }
        modalContainer.classList.add('ativo');
        modal.classList.add('ativo'); 
        btnFechar.addEventListener('click', () =>{
            modalContainer.classList.remove('ativo');
        modal.classList.remove('ativo'); 
            input.value = "";
        });
    }
    
    botaoPesquisar.addEventListener('click', requisitarDados);
}