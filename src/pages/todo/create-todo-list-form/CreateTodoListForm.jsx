import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdCreate } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelectors } from '../selectors';
import { todoActions } from '../store';

import { PanelText, Wrapper } from '../../../styled';
import { CreateTodoButton, TodoInput } from '../styled';


export const CreateTodoListForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const listName = useSelector(todoSelectors.getListName);

  const onClickHandler = useCallback(() => dispatch(todoActions.createNewList({ listName })), [listName]);
  const onChangeHandler = useCallback((e) => dispatch(todoActions.setListName(e.target.value)), []);

  return (
    <Wrapper>
      <PanelText subtitle center black>
        {`${t('thereYouCanCreateNewTodoLists')}`}
      </PanelText>
      <Wrapper row full style={{ borderBottom: '1px solid #80808070' }}>
        <TodoInput
          onChange={onChangeHandler}
          placeholder={t('createNewTodoList')}
        />
        <CreateTodoButton onClick={onClickHandler}>
          <IoMdCreate size="15px" />
        </CreateTodoButton>
      </Wrapper>
    </Wrapper>
  );
};
