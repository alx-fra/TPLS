import { letras, escolhidas } from "./escreve";

function baralha(grid) {
    for (let x = 0; x < grid; x++) {
      let min = 0,
        max = letras.length - 1;
      const indexer = Math.floor(Math.random() * (max - min + 1) + min); //devolve grid vezes uma letra random,
      escolhidas[x] = letras[indexer];
    }
  }

export default baralha;