import React from 'react';

function Nivellabel() {
    return ( 
        <div>
            <label for="cars">Nivel:</label>
            <select name="niveis" id="nivel">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="">4</option>
            </select>
        </div>
     );
}

export default Nivellabel;