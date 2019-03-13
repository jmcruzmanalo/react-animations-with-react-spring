import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InlineDiv from './components/UI/InlineDiv';
import Home from './containers/Home';

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
    <Router>
      <InlineDiv>
        <Route path="/" component={Home} />
      </InlineDiv>
    </Router>
  </RootDiv>
);

export default App;
