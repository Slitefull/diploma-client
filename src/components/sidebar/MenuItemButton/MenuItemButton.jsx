import React from 'react';

import { Wrapper } from '../../../styled';
import {
  LinkWrapper,
  MenuItemButtonIcon,
  MenuItemButtonText,
  MenuItemButtonWrapper,
  UnreadMessagesCount,
} from './styled';


export const MenuItemButton = ({ icon, title, unreadMessagesCount, isFull, isActive, link }) => (
  <LinkWrapper
    isFull={isFull}
    to={link}
  >
    <MenuItemButtonWrapper
      isActive={isActive}
    >
      <Wrapper row>
        <MenuItemButtonIcon
          isFull={isFull}
          src={icon}
        />
        {isFull && (
          <MenuItemButtonText>
            {title}
          </MenuItemButtonText>
        )}
      </Wrapper>
      {unreadMessagesCount && (
        <UnreadMessagesCount>
          {unreadMessagesCount}
        </UnreadMessagesCount>
      )}
    </MenuItemButtonWrapper>
  </LinkWrapper>
);
