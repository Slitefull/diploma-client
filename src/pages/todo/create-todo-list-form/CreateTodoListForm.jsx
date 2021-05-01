import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCreate } from 'react-icons/all';
import { todoSelectors } from '../selectors';
import { todoActions } from '../store';

import { PanelText, Wrapper } from '../../../styled';
import { CreateTodoButton, TodoInput } from '../styled';
import { FormErrorMessage } from '../../../components/common/form-control/styled';


export const CreateTodoListForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const listName = useSelector(todoSelectors.getListName);

  const isEmpty = listName === '';

  const onClickHandler = useCallback(() => {
    if (isEmpty) return;
    dispatch(todoActions.createNewList({ listName }));
  }, [listName]);
  const onChangeHandler = useCallback((e) => dispatch(todoActions.setListName(e.target.value)), []);

  return (
    <Wrapper>
      <PanelText subtitle center black>
        {`${t('thereYouCanCreateNewTodoLists')}`}
      </PanelText>
      <Wrapper row style={{ borderBottom: '1px solid #80808070' }}>
        <TodoInput
          onChange={onChangeHandler}
          placeholder={t('createNewTodoList')}
          value={listName}
        />
        <CreateTodoButton onClick={onClickHandler}>
          <IoMdCreate size="15px" />
        </CreateTodoButton>
      </Wrapper>
      {isEmpty && (
        <FormErrorMessage>
          {`${t('listNameCannotBeEmpty')}`}
        </FormErrorMessage>
      )}
    </Wrapper>
  );
};
