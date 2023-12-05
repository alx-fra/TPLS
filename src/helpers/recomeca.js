import { palavraadicionada } from "../constants";
import { pontosFim } from "../constants";


function recomeca(){
        //tira as mensagens de final de jogo e o botao
        let final=document.getElementById('final');
        if(final){final.style.display="none";}

        for (let index = 0; index < palavraadicionada.length; index++) {
            palavraadicionada.pop();
        }
        pontosFim[0]=0;
        let teste=document.getElementById('pontos');
        if(teste){teste.textContent=`${pontosFim[0]}`;}
        
        //ativa opcoes
        let bloco=document.getElementById('opcoes');
        bloco.style.visibility='visible';

        //limpa pontos
        pontosFim[0]=0;

        //apaga botao recomecar
        document.getElementById('alerta').textContent='';

        document.getElementById('botaoRecomecar').style.visibility='hidden'


}
export default recomeca;