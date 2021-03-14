import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCreate } from 'react-icons/all';
import { profileSelectors } from '../profile/selectors';
import { todoActions } from './store';
import { todoSelectors } from './selectors';
import { TodoItem } from './todo-item/TodoItem';

import { PagePanel, PanelText, Wrapper } from '../../styled';
import { CreateTodoButton, TodoInput, TodoWrapper } from './styled';


export const Todo = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState();

  const name = useSelector(profileSelectors.getUserName);
  const todos = useSelector(todoSelectors.getAllTodos);

  return (
    <>
      <PagePanel>
        <PanelText center>{t('todoApp')}</PanelText>
        <PanelText subtitle center>
          {`${t('simpleTodoAppToCreateNewTasks')}, ${name}`}
        </PanelText>
      </PagePanel>
      <TodoWrapper>
        <Wrapper row full style={{ borderBottom: '1px solid #80808070' }}>
          <TodoInput
            onChange={(e) => setTodo(e.target.value)}
            placeholder={t('whatNeedsToBeDone')}
          />
          <CreateTodoButton onClick={() => dispatch(todoActions.createTodo({ todo, status: 'active' }))}>
            <IoMdCreate size="15px" />
          </CreateTodoButton>
        </Wrapper>
        <Wrapper>
          {todos.map((item) => <TodoItem todo={item.todo} status={item.status} />)}
        </Wrapper>
      </TodoWrapper>
    </>
  );
};
