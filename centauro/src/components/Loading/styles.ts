import styled from 'styled-components';

interface ShowLoading {
  show: boolean;
}
// eslint-disable-next-line prettier/prettier
export const Container = styled.div<ShowLoading>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;

  div {
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
