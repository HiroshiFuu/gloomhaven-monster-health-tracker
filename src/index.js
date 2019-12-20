import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { StateProvider } from './state';
import { getInitialState } from './state/initial';
import { mainReducer } from './reducer';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'custom-font';
    src: url('./ZIKUTANGSFXST.ttf');
  }
  @font-face {
    font-family: 'pirata-one';
    src: url('./PirataOne-Gloomhaven.ttf');
  }

  #root, body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./images/background.jpg") no-repeat center center fixed;
    background-size: 100% 100%;
  }

  h1 {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  }
`;

ReactDOM.render(
  <StateProvider reducer={mainReducer} initialState={getInitialState()}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </StateProvider>
  , document.getElementById('root'));
