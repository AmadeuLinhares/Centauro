import React, { useContext } from 'react';

import LoadingGif from '../../assets/loading.gif';
import { LoadingContext } from '../../context/Loading';

import { Container } from './styles';

export const Loading: React.FC = () => {
  const { show } = useContext(LoadingContext);

  return (
    <Container show={show}>
      <div>
        <img src={LoadingGif} alt="loading" />
      </div>
    </Container>
  );
};
