import { palavraadicionada } from "../constants";

function adcplvra(x) {
    let valida = /\s/.test(x)
    let tamanho = x.length
    if (valida ===true || tamanho > 10) {
        alert('!! Palavra inválida !!\nVerifique se contém espaços ou tente diminuir o tamanho')
    }
    else{
    palavraadicionada.push(x);
    
    let teste=document.getElementById('puzList');
    teste.style.visibility='hidden';

    //mete o nivel no selecione
    let n = document.getElementById('btLevel');
    n.value='0';

    //esconde timer
    let temp=document.getElementById('timerValor');
    temp.style.visibility="hidden";

    //apaga label
    let label=document.getElementById("addLabel");
    label.value="";
    }
    //apaga label
    let label=document.getElementById("addLabel");
    label.value="";

}

export default adcplvra;

