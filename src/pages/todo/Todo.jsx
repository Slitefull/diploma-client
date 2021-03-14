import React from 'react';
import { useTranslation } from 'react-i18next';
import { TodoForm } from './todo-form/TodoForm';
import { CreateTodoListForm } from './create-todo-list-form/CreateTodoListForm';

import { PagePanel, PanelText } from '../../styled';
import { TodoWrapper } from './styled';


export const Todo = () => {
  const { t } = useTranslation();

  return (
    <>
      <PagePanel>
        <PanelText center>{t('todoApp')}</PanelText>
        <PanelText subtitle center>
          {t('simpleTodoAppToCreateNewTasks')}
        </PanelText>
      </PagePanel>
      <TodoWrapper>
        <CreateTodoListForm />
        <TodoForm />
      </TodoWrapper>
    </>
  );
};
