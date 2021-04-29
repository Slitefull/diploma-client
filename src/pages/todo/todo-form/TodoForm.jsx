import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCreate } from 'react-icons/all';
import { Tabs } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { todoActions } from '../store';
import { TodoItem } from '../todo-item/TodoItem';
import { todoSelectors } from '../selectors';

import { Wrapper } from '../../../styled';
import { CreateTodoButton, TodoInput } from '../styled';


const { TabPane } = Tabs;

export const TodoForm = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const todoName = useSelector(todoSelectors.getTodoName);
  const todos = useSelector(todoSelectors.getAllTodosByListId(id));
  const activeTodos = useSelector(todoSelectors.getAllActiveTodosByListId(id));
  const completeTodos = useSelector(todoSelectors.getAllCompleteTodosByListId(id));

  const onClickHandler = useCallback(() => {
    dispatch(todoActions.createTodo({ id, todoName, status: 'active' }));
  }, [todoName]);

  const onChangeHandler = useCallback((e) => dispatch(todoActions.setTodoName(e.target.value)), []);

  return (
    <>
      <Wrapper row full style={{ borderBottom: '1px solid #80808070' }}>
        <TodoInput
          onChange={onChangeHandler}
          placeholder={t('whatNeedsToBeDone')}
        />
        <CreateTodoButton onClick={onClickHandler}>
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
          {todos.map((item) => <TodoItem todo={item.todo} />)}
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
          {activeTodos.map((item) => <TodoItem todo={item.todo} />)}
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
          {completeTodos.map((item) => <TodoItem todo={item.todo} />)}
        </TabPane>
      </Tabs>
    </>
  );
};
