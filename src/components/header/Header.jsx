import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ProfileIcon } from './profile-icon/ProfileIcon';
import { LocalesDropdown } from './locales-dropdown/LocalesDropdown';
import { HeaderDropdown } from './header-dropdown/HeaderDropdown';

import { HeaderWrapper } from './styled';
import { NavLinkItem } from './menu/styled';
import { Wrapper } from '../../styled';


library.add(fas);


export const Header = () => (
  <HeaderWrapper>
    <FontAwesomeIcon
      icon={['fas', 'search']}
      style={{ color: '#212841', cursor: 'pointer' }}
    />
    <Wrapper row>
      <LocalesDropdown />
      <NavLinkItem to="/profile">
        <ProfileIcon />
      </NavLinkItem>
      <HeaderDropdown />
    </Wrapper>
  </HeaderWrapper>
);
