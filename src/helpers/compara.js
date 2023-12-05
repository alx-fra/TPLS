import iguais from "./iguais";
import pinta from "./pinta";
import pontuacao from "./pontuacao";
import reverse from "./reverse";
import risca from "./risca";
import acaba from "./acaba";
import { palavrasencontradas } from "../constants";

function compara(selecionados, nivelPos,palavras) {
    let n = palavras.length;
    

    palavras.forEach(palavra => {
        let palavraSeparada=palavra.split('');//palavra separada por letras
        let palavraSeparadaUPPER=[];//palavra separada por letras em maiuscula

        //dar upper case a cada palavra depois de separada por letras
        for (let index = 0; index < palavraSeparada.length; index++) {

            palavraSeparadaUPPER[index] = palavraSeparada[index].toUpperCase();
        }
       
        if(iguais(selecionados,palavraSeparadaUPPER)===true){
            
            let palavra = selecionados.join('').toLowerCase();
            pontuacao();
            palavrasencontradas[0]++;
            pinta(nivelPos);
            risca(palavra);
            if (palavrasencontradas[0] === n){
                acaba();
            }
        }else{

           let palavraSeparadaUPPERreversed = reverse(palavraSeparadaUPPER); 
           //ver se o ulitizador comecou na ultima letra até à primeira 
            if(iguais(selecionados,palavraSeparadaUPPERreversed)===true){
                //o selecionado esta correto e vai ser reversed,lowercase e join para entrar na risca com o nome do id correto 
                let palavra = selecionados.join('').toLowerCase();
                palavra=reverse(palavra).join('');
                pontuacao();
                palavrasencontradas[0]++;
                pinta(nivelPos);
                risca(palavra);
                if (palavrasencontradas[0] === n){
                    acaba();
                }
            }
            
        }
    });
    //as nao pintadas é porque estao mal e sao apagadas na funcao letra escolhida quando se da o ultimo click
}
export default compara;