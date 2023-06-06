import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


function InputNameProfessional({ onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onChange(inputValue); // Chamada da função onChange para atualizar o estado no componente pai
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Insira"
          value={value}
          onChange={handleChange} // Vinculando o valor do campo ao estado local
        />
      </div>
    </Box>
  );
}

export default InputNameProfessional;