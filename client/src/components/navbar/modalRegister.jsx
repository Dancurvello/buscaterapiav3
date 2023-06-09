import Modal from 'react-modal';
import React, { useState } from 'react';
import Axios from 'axios'
import { MdClose } from 'react-icons/md';
import FieldInput from './fieldInput';
import styled from "styled-components";

const ErrorMessage = styled.p`
color: red;
font-size: 12px;
margin-top: -9px
`;

const StyledButton = styled.button`
      background-color: #333;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
    
      &:hover {
        background-color: #555;
      }
    
      &:focus {
        outline: none;
      }
    `;


function ModalRegister({ isOpen, closeModal }) {

  const register = () => {

      let errorCheck = false;

      setFieldEmptyUsername('')
      setFieldEmptyPassword('')
      setFieldEmptyConfirmPassword('') 

    if (!usernameReg) {
      console.log('Email vazio');
      setFieldEmptyUsername('Email não pode ser vazio.');
      errorCheck = true;
      
    }

    if (!passwordReg) {
      console.log('Senha vazia');
      setFieldEmptyPassword('Senha não pode ser vazia.');
      errorCheck = true
      
    }

    if (!confirmPasswordReg ) {
      console.log('Confirma senha vazia');      
      setFieldEmptyConfirmPassword('Confirmar senha não pode ser vazia.');
      errorCheck = true
        
    }    

    if (passwordReg !== confirmPasswordReg) {
      console.log("As senhas não são iguais.");
      setPasswordError('As senhas não são iguais.');
      errorCheck = true
    }

    if (errorCheck === false) {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("Error:", error.message);
        });
        console.log('Cadastro realizado!');
        setPasswordError('');
        setFieldEmptyUsername('')
        setFieldEmptyPassword('')
        setFieldEmptyConfirmPassword('')
      

    }
  };

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [fieldEmptyUsername, setFieldEmptyUsername] = useState('');
    const [fieldEmptyPassword, setFieldEmptyPassword] = useState('');
    const [fieldEmptyConfirmPassword, setFieldEmptyConfirmPassword] = useState('');


    const handleUsernameChange = (value) => {
      setUsernameReg(value);
    };

    const handlePasswordChange = (value) => {
      setPasswordReg(value);
    };

    const handleConfirmPasswordChange = (value) => {
      setConfirmPasswordReg(value);
    };



  const modalStyle = {
        content: {
          width: '80%', /* Ajuste o valor conforme necessário */
          maxWidth: '500px', /* Ajuste o valor conforme necessário */
          borderRadius: '10px',
          boxShadow: '0px 1px 8px 2px rgba(0, 0, 0, 0.5)',          
          border: 'none',
          margin: '10vh auto',
          
        },

        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)', /* Cor de fundo semitransparente */
            backdropFilter: 'blur(4px)', /* Desfoque */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          },
      };

  const h1Style = {
        color: 'rgb(9, 11, 23)',
        textAlign: 'center',
        fontSize: '25px',
        fontWeight: 600,
        
        margin: '-14px 0px 1px',
      };

  

  const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '26px',
        color: 'rgba(0, 0, 0, 0.5)',
        padding: '0',
      };

      

       

  

      return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Register Modal" ariaHideApp={false} style={modalStyle}>
          <div style={{ background: 'white' }}>
            <button style={closeButtonStyle} onClick={closeModal}> <MdClose/> </button>
            <h1 style={h1Style}>Cadastre-se</h1>
            <FieldInput type="text" maxLength="50" placeholder="exemplo@gmail.com" nameLabel="Email:" onChange={handleUsernameChange} />
            {fieldEmptyUsername && <ErrorMessage>{fieldEmptyUsername}</ErrorMessage>}
            
            <FieldInput type="password" maxLength="30" placeholder="Senha" nameLabel="Senha:" onChange={handlePasswordChange} />
            {fieldEmptyPassword && <ErrorMessage>{fieldEmptyPassword}</ErrorMessage>}
            <FieldInput type="password" maxLength="30" placeholder="Senha" nameLabel="Confirmar senha:" onChange={handleConfirmPasswordChange} />
            {fieldEmptyConfirmPassword && <ErrorMessage>{fieldEmptyConfirmPassword}</ErrorMessage>}
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <div style={{ textAlign: 'center' }}>
            <StyledButton onClick={register}>CADASTRAR fixlogin</StyledButton>
            </div>
          </div>
        </Modal>
      );
    }
    
    export default ModalRegister;