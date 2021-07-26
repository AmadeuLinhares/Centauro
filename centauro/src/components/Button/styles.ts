import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  height?: string;
}
// eslint-disable-next-line prettier/prettier
export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  height: ${props => props.height ?? '28px'};
  width: ${props => props.width ?? '112px'};
  /* height: 28px;
  width: 112px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray_300 : theme.colors.red_500};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray_700 : theme.colors.white};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  border: solid 1px
    ${({ theme, disabled }) =>
      disabled ? theme.colors.gray_700 : theme.colors.red_500};
  transition: 0.5s;
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.red_800};
    border: solid 1px
      ${({ theme, disabled }) => !disabled && theme.colors.red_800};
  }
`;
