import styled from 'styled-components';
import { GlobalContainer } from '../Container';

interface OptionButton {
  selected: boolean;
}
export const Container = styled(GlobalContainer)`
  background-color: ${({ theme }) => theme.colors.red_500};
`;
export const ContainerHeader = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;
export const Search = styled.div`
  border: solid;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 40px;
  width: 795px;
  margin: 0 125px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.gray_400};
  input[type='text'] {
    flex: 1;
    height: 100%;
    padding-left: 20px;
    outline: none;
    border: none;
  }

  button {
    border: none;
    background-color: transparent;
    margin-right: 15px;
  }
  svg {
    color: ${({ theme }) => theme.colors.red_500};
    cursor: pointer;
    margin: 0 auto;
  }
`;
export const Cart = styled.div`
  position: relative;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Count = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  right: -6px;
  top: -6px;
  border: solid 2px ${({ theme }) => theme.colors.red_500};
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 100%;
    color: #000000;
  }
`;

export const ContainerOptions = styled.div`
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  button {
    margin-right: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray_800};
  }
`;

// eslint-disable-next-line prettier/prettier
export const Option = styled.button<OptionButton>`
  margin-right: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray_800};
`;
