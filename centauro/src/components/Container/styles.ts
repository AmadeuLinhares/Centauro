import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1366px auto;
`;
export const Sub = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  grid-template-columns: auto 1200px auto;
`;
export const Main = styled.div`
  grid-area: 1/2/2/3;
`;
