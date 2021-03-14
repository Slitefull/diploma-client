import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { TodoItemWrapper, TodoText } from './styled';


export const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TodoItemWrapper row>
      <Checkbox onChange={() => setIsChecked(!isChecked)} />
      <TodoText isComplete={isChecked}>{todo}</TodoText>
    </TodoItemWrapper>
  );
};
