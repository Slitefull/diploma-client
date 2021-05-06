import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from '../../components/common/search/Search';
import { UsersList } from './users-list/UsersList';

import { Container, PagePanel, PageWrapper, PanelText } from '../../styled';
import { CustomUserOutlined } from './styled';


export const Users = () => {
  const { t } = useTranslation();

  return (
    <>
      <PagePanel>
        <CustomUserOutlined />
        <PanelText center>
          {t('users')}
        </PanelText>
        <Search title={t('searchUsers')} />
      </PagePanel>
      <Container style={{ maxWidth: 1650, padding: '40px 0' }}>
        <PageWrapper>
          <UsersList />
        </PageWrapper>
      </Container>
    </>
  );
};
