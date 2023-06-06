import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react';

const CheckboxProfessional = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    const checkedValue = event.target.checked;
    setChecked(checkedValue);
    onChange(checkedValue); // Chamada da função onChange para atualizar o estado no componente pai
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Psicólogo"
      />
      <FormControlLabel
        control={<Checkbox disabled />}
        label="Fisioterapeuta"
      />
    </FormGroup>
  );
};

export default CheckboxProfessional;