import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CreateTodoListForm } from './create-todo-list-form/CreateTodoListForm';
import { todoSelectors } from './selectors';
import { TodoList } from './todo-list/TodoList';

import { PagePanel, PanelText, Wrapper } from '../../styled';
import { TodoWrapper } from './styled';


export const Todo = () => {
  const { t } = useTranslation();
  const allTodoLists = useSelector(todoSelectors.getAllTodoLists);

  return (
    <>
      <PagePanel>
        <PanelText center>
          {t('todoApp')}
        </PanelText>
        <PanelText subtitle center>
          {t('simpleTodoAppToCreateNewTasks')}
        </PanelText>
      </PagePanel>
      <TodoWrapper>
        <CreateTodoListForm />
        <Wrapper style={{ marginTop: 20 }}>
          {allTodoLists.map((list) => (
            <TodoList
              title={list.listName}
              todos={list.todos}
              id={list._id}
            />
          ))}
        </Wrapper>
      </TodoWrapper>
    </>
  );
};
