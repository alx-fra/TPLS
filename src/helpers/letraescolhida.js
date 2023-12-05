import { flag, selecionados } from "../constants";
import compara from "./compara";
import { idFinal, idInicial } from "../constants";
import { direcao, inicial } from "../constants";
import { grid1, grid2, grid3 } from "../constants";
function letraEscolhida(id, nivelPos,palavras) {
  let bloco = document.getElementById(`bloco${id}`);
  let gridFinal;

  switch (nivelPos) {
    case '0':
      gridFinal = 0;
      break;
    case '1':
      gridFinal = grid1 * grid1;
      break;
    case '2':
      gridFinal = grid2 * grid2;
      break;
    case '3':
      gridFinal = grid3 * grid3;
      break;
    default:
      break;
  }
  if (gridFinal !== "0") {
    if (bloco.style.backgroundColor === "rgb(111, 205, 179)") {
      bloco.style.backgroundColor = "white";
    } else if (flag[0] !== 1) {
      bloco.style.backgroundColor = "rgb(229, 33, 85)";
    }

    if (flag[0] !== 1) {
      flag[0] = 1;
      selecionados[0] = bloco.textContent;
      idInicial[0] = id;
      inicial[0] = id;
      direcao[0] = 0;
    } else if (flag[0] === 1 && selecionados[0] !== "0") {
      flag[0] = 0;
      idFinal[0] = id;
      compara(selecionados, nivelPos, palavras);
      //limpa selecionados
      while (selecionados.length > 0) {
        selecionados.pop();
      }
      //limpar as erradas e as brancas viram verdes
      for (let index = 1; index <= gridFinal; index++) {
        let temp = document.getElementById(`bloco${index}`);

        if (temp.style.backgroundColor === "rgb(229, 33, 85)") {
          temp.style.backgroundColor = "";
        }
        if (temp.style.backgroundColor === "white") {
          temp.style.backgroundColor = "rgb(111, 205, 179)";
        }
      }
    }
  }
}
export default letraEscolhida;

