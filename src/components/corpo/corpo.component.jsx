import React from "react";

function Corpo(props) {
  const { gameStarted,onLevelChange} =
    props;
    
  return (
    <div id="nivel">
      <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onLevelChange}
            disabled={gameStarted}
          >
            <option value="0" disabled>Seleccione...</option>
            <option value="1">Básico</option>
            <option value="2">Intermédio</option>
            <option value="3">Avançado</option>
          </select>
    </div>
  );
}

export default Corpo;
