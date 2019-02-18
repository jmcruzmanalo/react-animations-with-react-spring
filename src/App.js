import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    position: relative;    
    margin: 0;
    padding: 0;
  }

  #root {
    display: inline;
  }
`;

const RootDiv = styled('div')`
  display: inline;
`;

const App = () => (
  <RootDiv>
    <GlobalStyle />
    <h1>React-Spring</h1>
  </RootDiv>
);

export default App;
