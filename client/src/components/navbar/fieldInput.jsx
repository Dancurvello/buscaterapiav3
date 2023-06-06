
import React, { useState } from 'react';
import styled from "styled-components";


const FieldInputStyle = styled.input`
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  display: block;
  border-color: #00000033;
  border-style: solid;
  margin-top: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  
`;

const LabelInputStyle = styled.label`
  font-size: 15px;
  width: 100%;
  
`;

const FieldInput = ({ placeholder, nameLabel, onChange, type, maxLength }) => {
  const [error, /*setError*/] = useState('');

  /* Codigo comentado para nao exibir duas vezes o aviso de campo vazio

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    if (inputValue.trim() === '') {
      setError('Este campo não pode ser vazio');
    } else {
      setError('');
    }
  };
  */


  return (
    <>
    <div>
      <LabelInputStyle>{nameLabel}</LabelInputStyle>
      <FieldInputStyle type={type} maxLength={maxLength} placeholder={placeholder}
        //onBlur={handleBlur}
        onChange={e => onChange(e.target.value)} // Atualize esta linha
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </>
  );
};

export default FieldInput