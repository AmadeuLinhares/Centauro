import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Routes from './routes';
import { GlobalStyle } from './styles/gloabal';
import { Loading } from './components/Loading';
import GlobalTheme from './styles/theme';
import store from './store';
import { LoadingProvider } from './context/Loading';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <LoadingProvider>
        <Provider store={store}>
          <Loading />
          <Routes />
          <GlobalStyle />
        </Provider>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
