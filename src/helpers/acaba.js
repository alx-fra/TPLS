import { pontosFim } from "../constants";
function acaba(){
    let teste=document.getElementById('puzList');
    teste.style.visibility='hidden';

    let bloco=document.getElementById('opcoes');
    bloco.style.visibility='hidden';
    
    document.getElementById('alerta').textContent=`Pontuação final: ${pontosFim[0]}`;

    //fazer botao recomecar visivel
    let recomecar=document.getElementById('botaoRecomecar');
    recomecar.style.visibility="visible";

    let final=document.getElementById('final');
    final.style.display="block";

    //limpa o que está no timer
    let temp=document.getElementById('timerValor');
    temp.style.visibility="hidden";
}
export default acaba;