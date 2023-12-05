import { direcao,inicial } from "../constants";
function adicionaHover(flag,selecionados,id) {
    let x=document.getElementById(`bloco${id}`);

    if(direcao[0] === 0){
        direcao[0]=id-inicial[0] //se estiver no primeiro hover guarda o valor da direcao que vai ser possivel seguir
    }

//se nao estiver azul se tiver flag ligada e nao deixa duas vezes
    if(flag[0]===1 && direcao[0]===id-inicial[0] ){ //entra se alem da flag estivermos a tomar a direcao correta

        //fazer se ele ja estiver verde mete preto e depois as pretas viram verdes 
        if(x.style.backgroundColor==="rgb(111, 205, 179)"){
            x.style.backgroundColor="white";
        }else{
            x.style.backgroundColor="rgb(229, 33, 85)";
        }

        inicial[0]=id;//atualiza o ponto onde se vai calcular se estamos a seguir a direcao correta

        selecionados.push(x.textContent); 
    }
}
export default adicionaHover; 
