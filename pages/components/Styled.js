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
  `,
  Container: styled.div`
    width: 300px;
    max-width: 100%;
    margin: 0 auto;
  `,
  Form: styled.form`
    width: 300px;
    margin: 0 auto 50px;
  `,
  Input: styled.input`
    width: 100%;
    display: block;
    margin-bottom: 1rem;
    box-sizing: border-box;
    padding: 10px 20px;
    border: 1px solid ${BLACK};
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: blue;
    }

    &:last-child {
      margin-bottom: 0;
    }
  `,
  Label: styled.label`
    margin-bottom: 5px;
    display: block;
  `,
  MessageWrapper: styled.div`
    margin-top: 1rem;
  `,
  Paragraph: styled.p`
    margin-bottom: 1rem;
  `,
  Button: styled.button`
    background-color: ${GRAY};
    color: ${BLACK};
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 4px;
    border: solid 1px ${BLACK};
    min-width: 120px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${BLACK};
      color: ${GRAY};
    }
  `,
  CopyWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Copied: styled.span`
    margin-left: 1rem;
  `,
} 

export default Styled;