import React from 'react';
import { ButtonWrapper } from './styled';


export const Button = ({ text, onClickHandler, confirm }) => (
  <ButtonWrapper
    onClick={onClickHandler}
    confirm={confirm}
  >
    {text}
  </ButtonWrapper>
);
