import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #161616;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

  }

  button {
    border: none;
    box-shadow: 0 0 5px #fff;
    border-radius: 3px;
    cursor: pointer;
  }

`;
