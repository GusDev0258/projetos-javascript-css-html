export default function requestData(){
    async function requisitarDados(){
        try{
        const requisicao = await fetch("./storage/credentials.json");
        const transformar = await requisicao.json();
        return await transformar;
    }catch(error){
        console.log(error);
    }
    }
    return requisitarDados();
}