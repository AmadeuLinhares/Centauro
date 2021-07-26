import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6, p, span{
  font-family: 'Roboto', sans-serif;
}

button{
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: transparent;
}

`;
