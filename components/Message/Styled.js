import styled from 'styled-components';
import { GRAY, BLACK } from '../colors.js';

const Styled = {
  Wrapper: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: ${GRAY};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 30px;
    border: solid 1px ${BLACK};
    box-sizing: border-box;
  `,
  Close: styled.button`
    width: 30px;
    height: 30px;
    background: none;
    border: solid 1px ${BLACK};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: ${BLACK};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${BLACK};
      color: ${GRAY};
    }
  `,
  Paragraph: styled.p`
    margin-bottom: 1rem;

    a {
      color: ${BLACK};

      &:hover {
        color: blue;
      }
    }
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
  CopyWrapper: styled.div``,
  Copied: styled.div`
    margin-top: 10px;
    animation: fade 3s forwards;
  `,
} 

export default Styled;