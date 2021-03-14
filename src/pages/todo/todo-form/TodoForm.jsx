import React, { useState } from 'react';
import { IoMdCreate } from 'react-icons/all';
import { Tabs } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { todoActions } from '../store';
import { TodoItem } from '../todo-item/TodoItem';
import { todoSelectors } from '../selectors';

import { Wrapper } from '../../../styled';
import { CreateTodoButton, TodoInput } from '../styled';


const { TabPane } = Tabs;

export const TodoForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const todos = useSelector(todoSelectors.getAllTodos);
  const activeTodos = useSelector(todoSelectors.getAllActiveTodos);
  const completeTodos = useSelector(todoSelectors.getAllCompleteTodos);

  return (
    <>
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
              {t('all')}
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
              {t('active')}
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
              {t('completed')}
            </span>
          )}
          key="3"
        >
          {completeTodos.map((item) => (<TodoItem todo={item.todo} />))}
        </TabPane>
      </Tabs>
    </>
  );
};
