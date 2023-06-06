
import React, { useState } from 'react';
import { Navbar } from "../components/navbar";
import styled from "styled-components";
import CheckboxProfessional from '../components/body/bdRegisterProfessional/checkboxProfessional';
import SelectPsychologyApproach from '../components/body/bdRegisterProfessional/selectPsychologyApproach';
import InputNameProfessional from '../components/body/bdRegisterProfessional/inputNameProfessional';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const TitleItem = styled.h1`
    font-size: 22px;
    margin-left: 20px;

  
`;

const DivItem = styled.div`
    margin-left: 20px;  

`

const ErrorMessage = styled.p`
color: red;
font-size: 12px;
margin-top: -9px
`;


const RegisterProfessional = () => {

    const navigate = useNavigate();
    
const firstcheckregister = () => {

    let errorCheck = false;
    setEmptyTypeProfessionalReg('')
    setEmptyTypeApproachReg('')
    setEmptyNameReg('')
    setEmptyLastNameReg('')

    if (!typeProfessionalReg) {
        console.log('Tipo de profissional vazio');
        setEmptyTypeProfessionalReg('Escolha um tipo de profissional');
        errorCheck = true;
        
      }
  
      if (!typeApproachReg) {
        console.log('Tipo de abordagem vazia');
        setEmptyTypeApproachReg('Abordagem não pode ser vazia.');
        errorCheck = true
        
      }
  
      if (!nameReg ) {
        console.log('Nome senha vazio');      
        setEmptyNameReg('Nome não pode ser vazio.');
        errorCheck = true
          
      }    

      if (!lastNameReg ) {
        console.log('Sobrenome vazio');      
        setEmptyLastNameReg('Sobrenome não pode ser vazio.');
        errorCheck = true
          
      } 
  
      
  
      if (errorCheck === false) {
        Axios.post("http://localhost:3001/firstcheckregister", {
        typeProfessionalReg: typeProfessionalReg,
        typeApproachReg: typeApproachReg,
        nameReg: nameReg,
        lastNameReg: lastNameReg,
      }).then((response) => {
        console.log(response);
        console.log('Primeira etapa realizada!');
        setEmptyTypeProfessionalReg('');
        setEmptyTypeApproachReg('');
        setEmptyNameReg('');
        setEmptyLastNameReg('');
        errorCheck = false;
        navigate('/RegisterProfessionalContinue');
        })
        .catch((error) => {
            console.log('Error:', error.message);
          });
  
      }




}

const [typeProfessionalReg, setTypeProfessionalReg] = useState('')
const [typeApproachReg, setTypeApproachReg] = useState('')
const [nameReg, setNameReg] = useState('');
const [lastNameReg, setLastNameReg] = useState('');
const [emptytypeProfessionalReg, setEmptyTypeProfessionalReg] = useState('')
const [emptytypeApproachReg, setEmptyTypeApproachReg] = useState('')
const [emptynameReg, setEmptyNameReg] = useState('');
const [emptylastNameReg, setEmptyLastNameReg] = useState('');


const handleTypeProfessionalChange = (value) => {
    setTypeProfessionalReg(value);
  };

  const handleTypeApproachChange = (value) => {
    setTypeApproachReg(value);
  };

  const handleNameChange = (value) => {
    setNameReg(value);
  };

  const handleLastNameChange = (value) => {
    setLastNameReg(value);
  };





    return (
        <>
        <div className="App">
         <Navbar />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div>
            
            <TitleItem>Cadastre-se como*:</TitleItem>
        </div>
        <DivItem>
            <CheckboxProfessional onChange={handleTypeProfessionalChange}/>
            {emptytypeProfessionalReg && <ErrorMessage>{emptytypeProfessionalReg}</ErrorMessage>}
        </DivItem>
        <DivItem>
        <label>Abordagem*:</label>
            <div>
            <SelectPsychologyApproach onChange={handleTypeApproachChange}/>
            {emptytypeApproachReg && <ErrorMessage>{emptytypeApproachReg}</ErrorMessage>}
            </div>
        </DivItem>
        <DivItem>
            <label>Nome:</label>
            <div><InputNameProfessional onChange={handleNameChange}/>
            {emptynameReg && <ErrorMessage>{emptynameReg}</ErrorMessage>}
            </div>
        </DivItem>
        <DivItem>
            <label>Sobrenome:</label>
            <div><InputNameProfessional onChange={handleLastNameChange}/>
            {emptylastNameReg && <ErrorMessage>{emptylastNameReg}</ErrorMessage>}
            </div>
        </DivItem>
        <div>
            
        </div>
        <button onClick={firstcheckregister}>Próximos passos</button>
        campo obrigatorio
        
        </>
        
    )
}

export default RegisterProfessional