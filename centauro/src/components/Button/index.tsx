import React from 'react';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  width,
  height,
  children,
  ...rest
}) => {
  return (
    <Container width={width} height={height} {...rest}>
      {children}
    </Container>
  );
};
