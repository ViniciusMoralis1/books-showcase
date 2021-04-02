import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  };

  body, button, input {
    font: 16px 'Heebo', sans-serif;
    color: #FFF;
    background: #f4f4f4;
  };

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  };

  button {
    cursor: pointer;
  };
`;
