import baralha from "./baralha.js";
import { pontosFim } from "../constants/index.js";
import { grid1, grid2, grid3} from "../constants/index.js";
import { palavrasencontradas } from "../constants/index.js";
const novoestilo = document.createElement("style");
export let quadrado = {};
let provisorio = []; //array de todas as letras
export let letras = []; // eslint-disable-next-line
let letrastotais = 0;
let i = 0;
export let escolhidas = [];
let grid;

function escreve(dif,palavras) {
  let final=document.getElementById('final');
  if(final){final.style.display="none";}
  palavrasencontradas[0]=0;
  pontosFim[0]=0;
  let teste=document.getElementById('pontos');
  if(teste){teste.textContent=`${pontosFim[0]}`;}
  
  
  switch (dif) {
    case "1":
      grid = grid1;
      break;

    case "2":
      grid = grid2;
      break;

    case "3":
      grid = grid3;
      break;
    default:
      break;
  }



  let estilo = {};
  let string = [];
  
  palavras.forEach((element) => {
    for (let index = 0; index < element.length; index++) {
      letrastotais++;
    }
  });
  palavras.forEach((element) => {
    for (let index = 0; index < element.length; index++) {
      provisorio[i] = element.toUpperCase().charAt(index);
      i++;
    }
  });
  letras = [...new Set(provisorio)];

  for (let k = 0; k < grid; k++) {
    baralha(grid);
    estilo += ` auto`;
    quadrado = `div#puzzle {
      display:grid;
      grid-template-columns: ${estilo};
      grid-template-rows: ${estilo};
    }
      `;

    novoestilo.innerText += quadrado;
    document.head.appendChild(novoestilo);

    for (let k = 0; k < grid; k++) {
      string.push(escolhidas[k]);
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  let ainserir = [];
  let linhasusadas = [];
  let colunasusadas = [];
  let orientaçao;
  let counthoriz = 0,
    countvert = 0;
  let h = 0;
  let idausar = [],
    idcasasusadas = [],
    casaausar = [];
  let inicial = 0;
  let key;
  let posiçao = 0;
  let posiçaoinicial;
  let possivel;
  let igual, cruza,controlo,igualdade;
  palavras.forEach((element) => {
    
    do {
      ainserir = [];
      let c = 0;
      for (let index = 0; index < element.length; index++) {
        ainserir[c] = element.toUpperCase().charAt(index);
        c++;
      }
      let posiçoes = [];
      let direçao = Math.floor(Math.random() * (3 - 0 + 1) + 0);

      let linha = 0;
      let coluna = 0;
      igual = true;
      let possiveis = [];
      let n = 0;
      let l = 1;
      possivel = false;
      c = 0;
      cruza = false;
      let d = 0,
        id = [],
        letra = [],
        cont;
        
      // eslint-disable-next-line
      switch (direçao) {
        case 0: //horizontal e nhorizontal
          idausar = [];
          orientaçao = Math.floor(Math.random() * (1 - 0 + 1) + 0);
          if (orientaçao === 1) {
            ainserir.reverse();
          }
          do {
            igualdade = false;
            linha = Math.floor(Math.random() * (grid - 1 + 1) + 1); // eslint-disable-next-line
            for (let index = 0; index < linhasusadas.length; index++) {
              if (linha === linhasusadas[index]) {
                igualdade = true;
              }
            }
          } while (igualdade === true);
        
          linhasusadas[counthoriz] = linha;
          posiçao = Math.floor(
            Math.random() *
              (linha * grid - ainserir.length - (linha * grid - grid) + 1) +
              (linha * grid - grid)
          );
          for (let index = 0; index < ainserir.length; index++) {
            casaausar[index] = string[posiçao + index];
            idausar[index] = posiçao + index + 1;
          }
          d = 0;
          id = [];
          letra = []; // eslint-disable-next-line
          idcasasusadas.forEach((element) => {
            for (let index = 0; index < idausar.length; index++) {
              if (idausar[index] === element) {
                cruza = true;
                id[d] = idausar[index];
                letra[d] = ainserir[index];
                d++;
              }
            }
          });
          cont = 0;
          // eslint-disable-next-line
          id.forEach((element) => {
            controlo = 0;
            if (igual === true) {
            do {
              if (cruza === true) {
                if (string[element - 1] === letra[cont]) {
                  igual = true;
                } else {
                  igual = false;
                }
              }
              controlo++;
              
            } while (igual === true && controlo !==letra.length);
          }
            
            cont++;
          });

          //
          //
          key = 0;
          //
          //
          counthoriz++;
          
          break;
        case 1: //vertical e nvertical
          idausar = [];
          orientaçao = Math.floor(Math.random() * (1 - 0 + 1) + 0);
          if (orientaçao === 1) {
            ainserir.reverse();
          }
          do {
            igualdade = false;
            coluna = Math.floor(Math.random() * (grid - 1 + 1) + 1); // eslint-disable-next-line

            for (let index = 0; index < colunasusadas.length; index++) {
              if (coluna === colunasusadas[index]) {
                igualdade = true;
              }
            }
          } while (igualdade === true);
        
          colunasusadas[countvert] = coluna;
          for (let index = 0; index < grid - ainserir.length; index++) {
            let x = coluna + index * grid;
            posiçoes.push(x);
          }
          posiçaoinicial =
            posiçoes[
              Math.floor(Math.random() * (posiçoes.length - 1 - 0 + 1) + 0)
            ];
          for (let index = 0; index < ainserir.length; index++) {
            casaausar[index] = string[posiçaoinicial + index * grid - 1];
            idausar[index] = posiçaoinicial + index * grid;
          }
          d = 0;
          id = [];
          letra = [];// eslint-disable-next-line
          idcasasusadas.forEach((element) => {
            for (let index = 0; index < idausar.length; index++) {
              if (idausar[index] === element) {
                cruza = true;
                id[d] = idausar[index];
                letra[d] = ainserir[index];
                d++;
              }
            }
          });
          cont = 0;
          // eslint-disable-next-line
          id.forEach((element) => {
            controlo = 0;
            if (igual === true) {
            do {
              if (cruza === true) {
                if (string[element - 1] === letra[cont]) {
                  igual = true;
                } else {
                  igual = false;
                }
              }
              controlo++;
              
            } while (igual === true && controlo !==letra.length);
          }
            cont++;
          });

          //
          //
          key = 1;
          //
          //
          countvert++;
         
          break;
        case 2: //diagonal e ndiagonal
          l = 1;
          n = grid - ainserir.length + 1;
          c = 0;
          idausar = [];
          orientaçao = Math.floor(Math.random() * (1 - 0 + 1) + 0);
          if (orientaçao === 1) {
            ainserir.reverse();
          }
          for (let index = 0; index < n; index++) {
            for (let i = 0; i < n; i++) {
              possiveis[c] = l + i;
              c++;
            }
            l += grid;
          }

          inicial =
            possiveis[
              Math.floor(Math.random() * (possiveis.length - 0 + 1) + 0)
            ];
          for (let index = 0; index < ainserir.length; index++) {
            casaausar[index] = string[inicial + index * (grid + 1) - 1];
            idausar[index] = inicial + index * (grid + 1);
          }
          d = 0;
          id = [];
          letra = [];// eslint-disable-next-line
          idcasasusadas.forEach((element) => {
            for (let index = 0; index < idausar.length; index++) {
              if (idausar[index] === element) {
                cruza = true;
                id[d] = idausar[index];
                letra[d] = ainserir[index];
                d++;
              }
            }
          });
          cont = 0;
          // eslint-disable-next-line
          id.forEach((element) => {
            controlo = 0;
            if (igual === true) {
            do {
              if (cruza === true) {
                if (string[element - 1] === letra[cont]) {
                  igual = true;
                } else {
                  igual = false;
                }
              }
              controlo++;
             
            } while (igual === true && controlo !==letra.length);
          }
            
            cont++;
          });

          //
          //
          key = 2;
          //
          //
          break;

        case 3: //diagonalinversa e ndiagonalinversa
          l = 0;
          n = grid - ainserir.length;
          c = 0;
          idausar = [];
          orientaçao = Math.floor(Math.random() * (1 - 0 + 1) + 0);
          if (orientaçao === 1) {
            ainserir.reverse();
          }

          for (let index = 0; index <= n; index++) {
            for (let i = 0; i < n + 1; i++) {
              possiveis[c] = l + ainserir.length + i;
              c++;
            }
            l += grid;
          }

          inicial =
            possiveis[
              Math.floor(Math.random() * (possiveis.length - 0 + 1) + 0)
            ];

          for (let index = 0; index < ainserir.length; index++) {
            casaausar[index] = string[inicial + index * (grid - 1) - 1];
            idausar[index] = inicial + index * (grid - 1);
          }
          d = 0;
          id = [];
          letra = [];// eslint-disable-next-line
          idcasasusadas.forEach((element) => {
            for (let index = 0; index < idausar.length; index++) {
              if (idausar[index] === element) {
                cruza = true;
                id[d] = idausar[index];
                letra[d] = ainserir[index];
                d++;
              }
            }
          });
          cont = 0;
          // eslint-disable-next-line
          id.forEach((element) => {
            controlo = 0;
            if (igual === true) {
            do {
              if (cruza === true) {
                if (string[element - 1] === letra[cont]) {
                  igual = true;
                } else {
                  igual = false;
                }
              }
              controlo++;
            } while (igual === true && controlo !==letra.length);
          }
            cont++;
          });

          //
          //
          key = 3;
          //
          //
          break;
      }
      if (cruza === true) {
      }
      if (cruza === true && igual === true) {
        possivel = true;
      } else if (igual === false) {
        possivel = false;
      } else if (cruza === false) {
        possivel = true;
      }
    } while (possivel === false);
// eslint-disable-next-line
    switch (key) {
      case 0:
        for (let index = 0; index < ainserir.length; index++) {
          string[posiçao + index] = ainserir[index];
          idcasasusadas[h] = posiçao + index + 1;
          h++;
        }
        break;

      case 1:
        for (let index = 0; index < ainserir.length; index++) {
          string[posiçaoinicial + index * grid - 1] = ainserir[index];
          idcasasusadas[h] = posiçaoinicial + index * grid;
          h++;
        }
        break;
      case 2:
        for (let index = 0; index < ainserir.length; index++) {
          string[inicial + index * (grid + 1) - 1] = ainserir[index];
          idcasasusadas[h] = inicial + index * (grid + 1);
          h++;
        }
        break;

      case 3:
        for (let index = 0; index < ainserir.length; index++) {
          string[inicial + index * (grid - 1) - 1] = ainserir[index];
          idcasasusadas[h] = inicial + index * (grid - 1);
          h++;
        }
        break;
    }
  });
  console.log(idcasasusadas);
  

  let tempo=document.getElementById('timerValor');
    if (tempo){
      tempo.style.visibility="visible";
    }

  //
  //
  //
  //
  //
  //
  //
  //
  return string;
}

export default escreve;
