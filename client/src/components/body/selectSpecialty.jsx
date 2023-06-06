import React from "react";
import { useState } from 'react';
import './selectSpecialty.css'



function SelectSpecialty() {
    const [myTherapist, setMyTherapist] = useState("");
  
    const handleChange = (event) => {
      setMyTherapist(event.target.value)
    }

      
    return (
      <form>
        <label> Escolha a especialidade:</label>
        <select value={myTherapist} onChange={handleChange}>      
        <option disabled={true} value=""> Selecione...</option>  
          <option value="Psicologo">Psicologo</option>
          <option value="Fisioterapeuta">Fisioterapeuta</option>
        </select>
      </form>
    )
  }

  export default SelectSpecialty