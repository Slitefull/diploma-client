import React, { useCallback, useState } from 'react';
import { GrClose } from 'react-icons/all';
import { TodoForm } from '../todo-form/TodoForm';

import { Wrapper } from '../../../styled';
import { CustomArrow, IconWrapper, Title, TodoListWrapper } from './styled';


export const TodoList = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onRemoveListHandler = useCallback(() => console.log(id, 'id'), [id]);
  const onOpenListHandler = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      <TodoListWrapper>
        <IconWrapper onClick={onRemoveListHandler}>
          <GrClose size={13} />
        </IconWrapper>
        <Wrapper center row>
          <Title>
            {title}
          </Title>
        </Wrapper>
        <CustomArrow
          onClick={onOpenListHandler}
          isOpen={isOpen}
          size={20}
        />
      </TodoListWrapper>
      {isOpen && <TodoForm id={id} /> }
    </>
  );
};
