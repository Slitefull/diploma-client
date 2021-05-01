import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import { todoActions } from '../store';

import { TodoItemWrapper, TodoText } from './styled';


export const TodoItem = ({ listId, isActive, name }) => {
  const dispatch = useDispatch();
  const [isActiveTodo, setIsActiveTodo] = useState(isActive);

  const completeTodo = useCallback(() => {
    setIsActiveTodo(!isActiveTodo);
    dispatch(todoActions.changeTodoStatus({ listId, name }));
  }, [isActiveTodo, listId, name]);

  return (
    <TodoItemWrapper row>
      <Checkbox onChange={completeTodo} />
      <TodoText isActive={isActiveTodo}>
        {name}
      </TodoText>
    </TodoItemWrapper>
  );
};
