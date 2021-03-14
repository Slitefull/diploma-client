import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCreate } from 'react-icons/all';
import { Tabs } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { todoActions } from './store';
import { todoSelectors } from './selectors';
import { TodoItem } from './todo-item/TodoItem';

import { PagePanel, PanelText, Wrapper } from '../../styled';
import { CreateTodoButton, TodoInput, TodoWrapper } from './styled';


const { TabPane } = Tabs;

export const Todo = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const todos = useSelector(todoSelectors.getAllTodos);
  const activeTodos = useSelector(todoSelectors.getAllActiveTodos);
  const completeTodos = useSelector(todoSelectors.getAllCompleteTodos);

  return (
    <>
      <PagePanel>
        <PanelText center>{t('todoApp')}</PanelText>
        <PanelText subtitle center>
          {t('simpleTodoAppToCreateNewTasks')}
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
        <Tabs>
          <TabPane
            tab={(
              <span>
                <FileDoneOutlined />
                All
              </span>
            )}
            key="1"
          >
            {todos.map((item) => (<TodoItem todo={item.todo} />))}
          </TabPane>
          <TabPane
            tab={(
              <span>
                <CloseCircleOutlined />
                Active
              </span>
            )}
            key="2"
          >
            {activeTodos.map((item) => (<TodoItem todo={item.todo} />))}
          </TabPane>
          <TabPane
            tab={(
              <span>
                <CheckCircleOutlined />
                Completed
              </span>
            )}
            key="3"
          >
            {completeTodos.map((item) => (<TodoItem todo={item.todo} />))}
          </TabPane>
        </Tabs>
      </TodoWrapper>
    </>
  );
};
