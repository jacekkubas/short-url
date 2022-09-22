import styled from 'styled-components';
import { GRAY, BLACK } from './colors.js';
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 16px;
    color: ${BLACK};
  }

  @keyframes fade {
    50% {opacity: 1}
    100% {opacity: 0}
  }
`;

const Styled = {
  Wrapper : styled.section`
    height: 100vh;
    background-color:  ${GRAY};
    padding: 100px 0;
    box-sizing: border-box;
  `,
  Heading: styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin: 0 0 1rem 0;
  `,
  Container: styled.div`
    width: 300px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
  `,
} 

export default Styled;