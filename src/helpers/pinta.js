import { grid1,grid2,grid3 } from "../constants";

function pinta(nivelPos) {
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

        for (let index = 1; index <= gridFinal; index++) {  
            let temp=document.getElementById(`bloco${index}`);

            if(temp.style.backgroundColor==='rgb(229, 33, 85)'){
                temp.style.backgroundColor='rgb(111, 205, 179)';
            }
        }

}
export default pinta;
