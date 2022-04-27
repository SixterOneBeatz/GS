import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    overflow: auto;
  }

  body {
    margin: 0;
    font-family: 'Poppins'
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3d3d3d;
    border-radius: 100px;
  }

  .swal2-container {
    z-index: 10000;
  }
`;
