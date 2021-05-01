import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'antd';
import { GrClose } from 'react-icons/all';
import { todoSelectors } from '../selectors';
import { todoActions } from '../store';

import { TodoItemWrapper, TodoText } from './styled';
import { Wrapper } from '../../../styled';
import { IconWrapper } from '../todo-list/styled';
import { Preloader } from '../../../components/common/preloader/styled';


export const TodoItem = ({ id, listId, isActive, name }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(todoSelectors.getIsLoading);

  const onCompleteTodoHandler = useCallback(() => {
    dispatch(todoActions.changeTodoStatus({ listId, todoId: id, isActive }));
  }, [listId, id, isActive]);

  const onRemoveTodoHandler = useCallback(() => {
    dispatch(todoActions.deleteTodo({ listId, todoId: id }));
  }, [listId, id]);

  return (
    <TodoItemWrapper>
      <Wrapper row full>
        <Checkbox
          onChange={onCompleteTodoHandler}
          checked={!isActive}
        />
        <TodoText isActive={isActive}>
          {name}
        </TodoText>
      </Wrapper>
      <IconWrapper onClick={onRemoveTodoHandler}>
        {
          isLoading
            ? (
              <Preloader
                color="#3e4676"
                size={15.5}
              />
            )
            : (
              <GrClose
                size={13}
              />
            )
        }
      </IconWrapper>
    </TodoItemWrapper>
  );
};
