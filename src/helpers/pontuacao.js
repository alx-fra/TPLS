import { pontosFim,tempPontos } from "../constants";
pontosFim[0]=0;
tempPontos[0]=0;
function pontuacao() {
    let bloco=document.getElementById('pontos');
    console.log(tempPontos[0]);
    pontosFim[0] += 1.5*(tempPontos[0]/10000);
    pontosFim[0]=Math.round(pontosFim[0]);
    bloco.textContent = pontosFim[0];
    
}
export default pontuacao;