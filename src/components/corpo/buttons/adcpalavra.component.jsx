import React from 'react';
import adcplvra from '../../../helpers/adcpalavra';

function AdcPalavra(props) {
    
    return ( 
            <div id="add">
                <input id="addLabel" placeholder="Palavra" />
                <button id="addButton" onClick={() => adcplvra(document.getElementById("addLabel").value)}>+</button> 
            </div>
     );
}

export default AdcPalavra;