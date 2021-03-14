import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import { TodoItemWrapper, TodoText } from './styled';
import { todoActions } from '../store';


export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const completeTodo = () => {
    setIsChecked(!isChecked);
    dispatch(todoActions.completeTodo(todo));
  };

  return (
    <TodoItemWrapper row>
      <Checkbox onChange={completeTodo} />
      <TodoText isComplete={isChecked}>{todo}</TodoText>
    </TodoItemWrapper>
  );
};
