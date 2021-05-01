import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/all';
import { todoSelectors } from '../selectors';
import { todoActions } from '../store';
import { TodoForm } from '../todo-form/TodoForm';

import { Wrapper } from '../../../styled';
import { CustomArrow, IconWrapper, Title, TodoListWrapper } from './styled';
import { Preloader } from '../../../components/common/preloader/styled';


export const TodoList = ({ id, title }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isLoading = useSelector(todoSelectors.getIsLoading);

  const onRemoveListHandler = useCallback(() => dispatch(todoActions.deleteListById(id)), [id]);
  const onOpenListHandler = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      <TodoListWrapper>
        <IconWrapper onClick={onRemoveListHandler}>
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
        <Wrapper center row>
          <Title>
            {title}
          </Title>
        </Wrapper>
        <Wrapper style={{ marginLeft: 'auto' }}>
          {
            isLoading
              ? (
                <Preloader
                  color="#3e4676"
                  size={15.5}
                />
              )
              : (
                <CustomArrow
                  onClick={onOpenListHandler}
                  isOpen={isOpen}
                  size={20}
                />
              )
          }
        </Wrapper>
      </TodoListWrapper>
      {isOpen && <TodoForm id={id} /> }
    </>
  );
};
