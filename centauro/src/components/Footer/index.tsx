import React from 'react';

import { ContainerFooter, Main } from './styles';

import LogoFooter from '../../assets/logo_black.png';

export const Footer: React.FC = () => {
  return (
    <Main>
      <ContainerFooter>
        <img src={LogoFooter} alt="logo" />
      </ContainerFooter>
    </Main>
  );
};
