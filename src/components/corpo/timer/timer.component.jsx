import React from 'react'
import { timeraux,tempPontos } from '../../../constants';
import acaba from '../../../helpers/acaba';


const Timer = (props) => {
    const { nivelsel} =
    props;
    let y;
    let minutos;
    let segundos;
    let distancia;

    switch (nivelsel) {
        case '0':
            y=0;
            timeraux[0]=0;
            break;
        case '1':
            y=5.15;
            timeraux[0]=1;
            break;
        case '2':
            y=5;
            timeraux[0]=2;
            break;
        case '3':
            y=4.45;
            timeraux[0]=3;
            break;    
        default:
            break;
        }
if(y!==0){
    if(timeraux[0]!==timeraux[1]){
        let temp = new Date();
        timeraux[3] = AddMinutos(temp,y);//guarda tempo atual
    }else{
    }




function AddMinutos(data, minutos) {
    return new Date(data.getTime() + minutos * 60000);
}


//itera a cada segundo
let x = setInterval(function() {

     let now= new Date();//vai ser a nova data a cada segundo

    distancia = timeraux[3] - now;
    tempPontos[0]=distancia;

    minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    segundos = Math.floor((distancia % (1000 * 60)) / 1000);


    document.getElementById("timerValor").innerHTML = minutos + ":" + segundos ;

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("timerValor").innerHTML = "";
        let tempo=document.getElementById('timerValor');
            //so acaba e mostra pontos se estiver o timer visivel, para depois quando adicionarmos
            //   palavra se o timer desaparecido chegar a 0 nao chamar a funcao acaba
            if (tempo.style.visibility==="visible"){
                acaba();
            }
    }
}, 1000);

}
    return (
        <div className="App" id="TimerDiv" >
            <h2 id="timerValor" > </h2>
        </div>
    )
}

export default Timer;
