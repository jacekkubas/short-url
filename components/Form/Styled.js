import styled from 'styled-components';
import { GRAY, BLACK } from '../colors.js';

const Styled = {
  Form: styled.form`
    width: 300px;
    margin: 0 auto;
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
} 

export default Styled;