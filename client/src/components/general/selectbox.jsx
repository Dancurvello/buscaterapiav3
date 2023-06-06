import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { statesBrazil } from './const';




export default function StateSelect() {
    const [selectedState, setSelectedState] = useState('');
  
    const handleChange = (event) => {
      setSelectedState(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="state-select-label">Estado</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={selectedState}
            label="Estado"
            onChange={handleChange}
          >
            <MenuItem value="">Selecione um estado</MenuItem>
            {statesBrazil.map((estado) => (
              <MenuItem key={estado.slug} value={estado.slug}>
                {estado.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }