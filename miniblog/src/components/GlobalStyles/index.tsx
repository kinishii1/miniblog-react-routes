import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
  body {
    font-family: 'Playfair Display', sans-serif;
    background-color: #f5f5f5;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;