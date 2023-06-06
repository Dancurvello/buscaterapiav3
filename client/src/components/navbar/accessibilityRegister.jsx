import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import ModalRegister from './modalRegister';

const AccessibilityContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 2vw; /* ou outro valor que voc� achar apropriado */
  padding-right: 18px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  margin-top: 4vw;

  &:hover {
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;



export function AccessibilityRegister(props) {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

  const openModalRegister = () => {
    setModalRegisterIsOpen(true);
  };

  const closeModalRegister = () => {
    setModalRegisterIsOpen(false);
  };

  return (
    <AccessibilityContainer>
      <RegisterButton onClick={openModalRegister}>Cadastre-se</RegisterButton>
      <ModalRegister isOpen={modalRegisterIsOpen} closeModal={closeModalRegister}/>
    </AccessibilityContainer>
  );
}
