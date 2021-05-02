import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { LocalesDropdown } from './locales-dropdown/LocalesDropdown';

import { HeaderWrapper } from './styled';


library.add(fas);

export const Header = () => (
  <HeaderWrapper>
    <FontAwesomeIcon
      icon={['fas', 'search']}
      style={{ color: '#212841', cursor: 'pointer' }}
    />
    <LocalesDropdown />
  </HeaderWrapper>
);
