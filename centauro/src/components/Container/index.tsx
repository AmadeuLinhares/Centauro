import React from 'react';
import { Container, Sub, Main } from './styles';

export interface LayoutProps {
  children: React.ReactNode;
}
export const GlobalContainer: React.FC<LayoutProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Sub>
        <Main>{children}</Main>
      </Sub>
    </Container>
  );
};
