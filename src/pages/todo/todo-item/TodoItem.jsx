import React, { useState } from 'react';
import { TodoItemWrapper } from './styled';


export const TodoItem = ({ todo, status }) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <TodoItemWrapper>Test</TodoItemWrapper>
  );
};
