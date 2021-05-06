import React from 'react';
import { GlobalStyle } from './style/style';
import { BrowserRouter } from 'react-router-dom'
import { CepInformationProvider } from './context/cepInformation';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <CepInformationProvider>
          <Routes />
        </CepInformationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
