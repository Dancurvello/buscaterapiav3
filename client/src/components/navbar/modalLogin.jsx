import Modal from 'react-modal';
import React, { useState } from 'react';
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import FieldInput from './fieldInput';
import ModalRegister from './modalRegister';
import { login } from '../../api';

const BlackLine = styled.div`
  height: 1px;
  background-color: #00000054;
  margin-top: 65px;
`;

const NoAccount = styled.p`
  font-size: 15px;
`

const OpenModalRegisterButton = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  color: blue;
  text-decoration: underline;
  font-size: 15px;
  margin-left: 1px;

  

`



const GoogleButton = styled.button`
background-color: #4285F4;
color: #fff;
padding: 8px 16px;
border: none;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-weight: bold;

&:hover {
  background-color: #72a0ee;
  border-radius: 6px;
}

&:focus {
  outline: none;
}


  
`;

const GoogleIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 8px;
  border-radius: 11px;
`;

const ButtonForgotPassword = styled.button`
background-color: white;
border: none;
cursor: pointer;
`


const DivInput = styled.div`
border-radius = 8px
border-color: #b2b2b2;


`

const ErrorMessage = styled.p`
display: flex;
color: red;
font-size: 12px;
margin-top: -22px
`;

const StyledButton = styled.button`
      background-color: #333;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 11px;
      border-radius: 5px;
      cursor: pointer;
      width: inherit;
      font-weight: bold;
      width: 100%;
    
      &:hover {
        background-color: #555;
      }
    
      &:focus {
        outline: none;
      }
    `;

    

const H1 = styled.h1`
  color: rgb(9, 11, 23);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: -14px 0px 1px;
`;
  



function ModalLogin({ isOpen, closeModal }) {

  const handleLogin = async () => {

    let errorCheck = false;

    setFieldEmptyUsername('')
    setFieldEmptyPassword('')
    

  if (!username) {
    console.log('Email não pode ser vazio.');
    setFieldEmptyUsername('Email não pode ser vazio.');
    errorCheck = true;
    
  }

  if (!password) {
    console.log('Senha não pode ser vazia.');
    setFieldEmptyPassword('Senha não pode ser vazia.');
    errorCheck = true
    
  }
  

  if (errorCheck === false) {
    
      const response = await login(username, password)
      setLoginStatus(response)
      console.log('login realizado!');      
      setFieldEmptyUsername('')
      setFieldEmptyPassword('')   

  }
};

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fieldEmptyUsername, setFieldEmptyUsername] = useState('');
    const [fieldEmptyPassword, setFieldEmptyPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const handleUsernameChange = (value) => {
      setUsername(value);
    };

    const handlePasswordChange = (value) => {
      setPassword(value);
    };


    const modalStyle = {
      content: {
        width: '80%', /* Ajuste o valor conforme necessário */
        maxWidth: '500px', /* Ajuste o valor conforme necessário */
        borderRadius: '10px',
        boxShadow: '0px 1px 8px 2px rgba(0, 0, 0, 0.5)',          
        border: 'none',
        margin: 'auto auto',
        inset: 'initial'
        
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

      const divButtonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: '8px',
        padding: '3px'
        
      };

      const divIncorretLogin = {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        
      };

      const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

        const openModalRegister = () => {
          setModalRegisterIsOpen(true);
        };

      const closeModalRegister = () => {
        setModalRegisterIsOpen(false);
      };


      return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Register Modal" ariaHideApp={false} style={modalStyle}>
          <div style={{ background: 'white' }}>
            <button style={closeButtonStyle} onClick={closeModal}> <MdClose/> </button>            
              <H1>Login</H1>
                <DivInput>    
                  <FieldInput type="email" maxLength="50" placeholder="exemplo@gmail.com" nameLabel="Email:" onChange={handleUsernameChange} />
                </DivInput> 
                  {fieldEmptyUsername && <ErrorMessage>{fieldEmptyUsername}</ErrorMessage>}  
                  <FieldInput type="text" maxLength="30" placeholder="Senha" nameLabel="Senha:" onChange={handlePasswordChange} />
                  {fieldEmptyPassword && <ErrorMessage>{fieldEmptyPassword}</ErrorMessage>}
               <div style={{ marginTop: "-14px", marginBottom: '25px' }}>
                <ButtonForgotPassword>Esqueceu a senha?</ButtonForgotPassword>
                </div>
              <div style={divButtonStyle}>
                <StyledButton onClick={handleLogin}>ENTRAR</StyledButton>
                  {loginStatus && <div style={divIncorretLogin}>{loginStatus}</div>}    
              </div>
              <div>
              <h4 style={{ textAlign: 'center' }}> OU </h4></div>
                <div>
                <GoogleButton>
                <GoogleIcon src='../../assets/google-removebg-preview.png' alt='googleicon'/>
                Entrar com o Google fix - login
                </GoogleButton>
                  </div> 
                  <BlackLine />
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <NoAccount>Ainda não tem conta?</NoAccount>
                    <OpenModalRegisterButton onClick={openModalRegister}> Cadastre-se</OpenModalRegisterButton>
                    <ModalRegister isOpen={modalRegisterIsOpen} closeModal={closeModalRegister}/>
                  </div>
          </div>
        </Modal>
      );
    }


    export default ModalLogin