import React from "react";
import escreve from "../../../helpers/escreve";
import letraEscolhida from "../../../helpers/letraescolhida";
import adicionaHover from "../../../helpers/adicionaHover";
import { flag, selecionados } from "../../../constants";


function Puzzle(props) {
  const { nivelsel,palavras} =
    props;

  let grid = escreve(nivelsel,palavras).map((letras, index) => {
    let i = index + 1;

    let teste=document.getElementById('puzList');
    teste.style.visibility='visible';
    return (
      <div
        id={"bloco" + i}
        key={i}
        onMouseOver={() => adicionaHover(flag, selecionados, i)}
        onClick={() => letraEscolhida(i,nivelsel,palavras)}
      >
        {letras}
      </div>
    );

  });

  return (
    <div id="puzzle">{grid}</div>
  );
}

export default Puzzle;
