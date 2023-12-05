import AdcPalavra from "./adcpalavra.component";
import React from "react";

function Buttons(props) {
  const { nivelsel} =
  props;
  
  
  return (
    <div id="adiciona">
      <AdcPalavra nivelsel={nivelsel}/>
        </div>
  );
}

export default Buttons;
