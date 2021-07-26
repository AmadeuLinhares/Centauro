import styled from 'styled-components';
import { GlobalContainer } from '../Container';

export const Main = styled(GlobalContainer)`
  padding-top: 100px;
  div {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gray_300};
  }
`;
export const ContainerFooter = styled.footer``;
