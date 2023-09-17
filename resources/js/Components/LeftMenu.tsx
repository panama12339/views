import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsList } from 'react-icons/bs';

interface LeftMenuContainerProps {
  menuOpen: boolean;
}

const LeftMenuContainer = styled.div<LeftMenuContainerProps>`

  width: 240px;
  height: 500px;
  background-color: #fff;
  padding: 10px;
  position: fixed;
  top: 60%;
  left: 0;
  transform: translateY(-50%);
  border: 2px solid #ccc;
  cursor: pointer;

  @media (max-width: 635px) {
    width: 100%;
    height: auto;
    left: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')};
    transform: none;
    border: none;
  }
`;

const MobileIcon = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const LeftMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <LeftMenuContainer menuOpen={menuOpen}>
      <MobileIcon>
        <BsList onClick={handleMenuClick} style={{ cursor: 'pointer' }} />
      </MobileIcon>
      <ul>
        <li>Registrar Psicólogo</li>  
      </ul>
    </LeftMenuContainer>
  );
};

export default LeftMenu;





