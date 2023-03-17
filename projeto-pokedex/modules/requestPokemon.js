export default function requestPokemon(){
    const input = document.querySelector('#procurar-pokemon');
    const btn = document.querySelector('.btn-pesquisar');
    const pkmName = document.querySelector('.pokemon-name');
    const pkmNumber = document.querySelector('.pokemon-number-number');
    const pkmHeight = document.querySelector('#pokemon-height-number');
    const pkmWeight = document.querySelector('#pokemon-weight-number');
    const pkmImg = document.querySelector('#pokemon-imagem');
    const pkmType1 = document.querySelector('#type1');
    const pkmType2 = document.querySelector('#type2');
    const sttHP = document.querySelector('#hp-n');
    const sttATK = document.querySelector('#atk-n');
    const sttDEF = document.querySelector('#def-n');
    const sttSPA = document.querySelector('#spa-n');
    const sttSPD = document.querySelector('#spd-n');
    const sttSPE = document.querySelector('#spe-n');
    const background = document.querySelector('.content');
    const btnNext = document.querySelector('.next');
    const btnBack = document.querySelector('.back');
    
    async function requisitarPokemon(pokemon){  
        const requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const requisicaoJSON = await requisicao.json();
        return requisicaoJSON;
    }
    async function manipularDOM(id){
        const pegaPokemon = await requisitarPokemon(id)
        
        animaPokemon();
        pkmImg.src = pegaPokemon['sprites']['other']['official-artwork']['front_default'];
        pkmName.innerText = pegaPokemon.forms[0].name;
        pkmNumber.innerText = `${pegaPokemon.id}`;
        pkmHeight.innerText = (pegaPokemon.height / 10);
        pkmWeight.innerText = (pegaPokemon.weight / 10);
        if(pegaPokemon['types'].length < 2){
            pkmType1.src = `./resources/type-icons/${pegaPokemon['types'][0]['type']['name']}.png`;
            pkmType2.style.display = 'none';
        }else{
            pkmType2.style.display = 'block';
            pkmType1.src = `./resources/type-icons/${pegaPokemon['types'][0]['type']['name']}.png`;
            pkmType2.src = `./resources/type-icons/${pegaPokemon['types'][1]['type']['name']}.png`;
        }
        sttHP.innerText = pegaPokemon['stats'][0]['base_stat'];
        sttATK.innerText = pegaPokemon['stats'][1]['base_stat'];
        sttDEF.innerText = pegaPokemon['stats'][2]['base_stat'];
        sttSPA.innerText = pegaPokemon['stats'][3]['base_stat'];
        sttSPD.innerText = pegaPokemon['stats'][4]['base_stat'];
        sttSPE.innerText = pegaPokemon['stats'][5]['base_stat'];
        const getType = pegaPokemon['types'][0]['type']['name'];
        console.log(getType)
        background.removeAttribute('class');
        background.classList.add('content', getType);
        pkmImg.classList.add('anima')
    }
    function animaPokemon(){
        pkmImg.classList.toggle('anima');
    }
    async function proximoPokemon(){
        const id = pkmNumber.innerText;
        if(id <= 1008){
            btnNext.removeEventListener('click', proximoPokemon);
            animaPokemon();
            await manipularDOM(+id+1);
        }  
        btnNext.addEventListener('click', proximoPokemon);
        btnBack.addEventListener('click', antesPokemon);
    }
    async function antesPokemon(){
        const id = pkmNumber.innerText;
        if(id > 1){
            btnBack.removeEventListener('click', antesPokemon);
            animaPokemon();
            await manipularDOM(+id-1);
        }
        btnBack.addEventListener('click', antesPokemon);
        btnNext.addEventListener('click', proximoPokemon);
    }
    async function novaFuncao(){
        const id = input.value.toLowerCase();
        await manipularDOM(id);
    }
    btn.addEventListener('click', novaFuncao);
    btnNext.addEventListener('click', proximoPokemon);
    btnBack.addEventListener('click', antesPokemon);
}