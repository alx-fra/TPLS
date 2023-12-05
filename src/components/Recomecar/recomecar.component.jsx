import React from "react";
import recomeca from "../../helpers/recomeca";

function Recomeca() {
    return(
        <button id="botaoRecomecar" onClick={() => recomeca()}>Recomeçar</button>
    );
}
export default Recomeca;
