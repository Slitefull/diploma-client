import React from 'react';
import { Search } from '../../components/common/search/Search';
import { UsersList } from './users-list/UsersList';

import { Container, PagePanel, PanelText, Wrapper } from '../../styled';
import { CustomUserOutlined } from './styled';


export const Users = () => (
  <>
    <PagePanel>
      <CustomUserOutlined />
      <PanelText center>Users</PanelText>
      <Search title="Search users" />
    </PagePanel>
    <Container style={{ maxWidth: 1650 }}>
      <Wrapper row justify wrap>
        <UsersList />
      </Wrapper>
    </Container>
  </>
);
