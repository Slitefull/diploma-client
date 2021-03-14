import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdCreate } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store';

import { PanelText, Wrapper } from '../../../styled';
import { CreateTodoButton, TodoInput } from '../styled';


export const CreateTodoListForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <PanelText subtitle center black>
        {`${t('thereYouCanCreateNewTodoLists')}`}
      </PanelText>
      <Wrapper row full style={{ borderBottom: '1px solid #80808070' }}>
        <TodoInput
          onChange={(e) => setName(e.target.value)}
          placeholder={t('createNewTodoList')}
        />
        <CreateTodoButton onClick={() => dispatch(todoActions.createNewList({ name }))}>
          <IoMdCreate size="15px" />
        </CreateTodoButton>
      </Wrapper>
    </Wrapper>
  );
};
