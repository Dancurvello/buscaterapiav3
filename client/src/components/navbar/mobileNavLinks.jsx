import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { AccessibilityRegister } from "./accessibilityRegister";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 2vw; /* ou outro valor que você achar apropriado */
  padding-right: 18px;
`;

const RegisterProfessionalButton = styled.a`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 15px;
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

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #f0f0f0;
  width: 66%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  margin-left: 34vw;
  justify-items: flex-end;
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5),
              5px 0 5px -5px rgba(0, 0, 0, 0.5);
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 4px 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 19px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  text-align: right;
  width: 100%
  
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        
        <LinksWrapper>       
        <div> 
          <LinkItem>
            <Link href={'/Home'}>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href={'/MyAccount'}>Meu Perfil</Link>
          </LinkItem>
          <LinkItem>
            <Link href={'/Favorites'}>Favoritos</Link>
          </LinkItem>
          <LinkItem>
            <Link href={'/DownloadApp'}>Baixe nosso App</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
          <AccessibilityRegister/>
          <AccessibilityContainer>
          <RegisterProfessionalButton href={'/RegisterProfessional'}>Sou um Terapeuta</RegisterProfessionalButton>
          </AccessibilityContainer>
          </div> 
        </LinksWrapper>
        
      )}
    </NavLinksContainer>
  );
}
