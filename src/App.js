import "./assets/styles/App.css";
import React from "react";
import { useState } from "react";
import Header from "./components/header/header.component";
import Corpo from "./components/corpo/corpo.component";
import Puzzle from "./components/corpo/puzzle/puzzle.component";
import CLista from "./components/corpo/Lista/lista.component";
import { grid1, grid2, grid3, palavraspossiveis, palavraadicionada } from "./constants";
import Buttons from "./components/corpo/buttons/buttons.component";
import Timer from "./components/corpo/timer/timer.component";
import Pontuacao from "./components/Pontuacao/pontuacao.component";
import Recomeca from "./components/Recomecar/recomecar.component";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
} 

let palavras = [];
function App() {
  const [nivelsel, setNivelSel] = useState("0");
   const handleLevelChange = (event) => {
    
    const { value } = event.currentTarget;
    let gridFinal
    setNivelSel(value);
    switch (value) {
      case '0':
        gridFinal = 0;
        break;
      case '1':
        gridFinal = grid1 * grid1;
         palavras = getMultipleRandom(palavraspossiveis, 4)
         for (let index = 0; index < palavraadicionada.length; index++) {
          palavras.push(palavraadicionada[index]);
          
         }
        break;
      case '2':
        gridFinal = grid2 * grid2;
         palavras = getMultipleRandom(palavraspossiveis, 7) 
         for (let index = 0; index < palavraadicionada.length; index++) {
          palavras.push(palavraadicionada[index]);
          
         }
           break;
      case '3':
        gridFinal = grid3 * grid3;
         palavras = getMultipleRandom(palavraspossiveis, 10)
         for (let index = 0; index < palavraadicionada.length; index++) {
          palavras.push(palavraadicionada[index]);
          
         }
        break;
      default:
        break;
    }
    for (let index = 1; index <= gridFinal; index++) {
      let temp = document.getElementById(`bloco${index}`);
      if(temp){
      if (temp.style.backgroundColor !== "none") {
        temp.style.backgroundColor = "";
      }
    }
    }
    let lista = document.getElementById('list').childNodes
    if (lista) {
      for (let index = 0; index < lista.length; index++) {
      lista[index].style.textDecoration = "blink"
      lista[index].style.color = "black"
      }
    }
  };
  


  return (
    <div id="main">
      <Header />

      <div id="final">
        <div id="alerta"></div>
        <Recomeca/>
      </div>


      <div id="opcoes">
        <Corpo nivelsel={nivelsel} onLevelChange={handleLevelChange} />
        <Timer nivelsel={nivelsel}/>
        <Pontuacao/>
        <Buttons nivelsel={nivelsel}/>
      </div>

      <div id="corpo">
        <div id="puzList">
          <Puzzle nivelsel={nivelsel} palavras={palavras}/>
          <CLista palavras={palavras} />
        </div>
      </div>
    </div>
  );
}

export default App;
