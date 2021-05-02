import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sidebarActions } from '../store';

import { Wrapper } from '../../../styled';
import {
  LinkWrapper,
  MenuItemButtonIcon,
  MenuItemButtonText,
  MenuItemButtonWrapper,
} from './styled';
import { localStorageCurrentMenuItem } from '../../../constants/menu';


export const MenuItemButton = ({ name, title, link, icon, isFull, isActive }) => {
  const dispatch = useDispatch();

  const onChangeMenuItemHandler = useCallback(() => {
    dispatch(sidebarActions.setCurrentMenuItem(name));
    localStorage.setItem(localStorageCurrentMenuItem, name);
  }, [name]);

  return (
    <LinkWrapper
      isFull={isFull}
      to={link}
    >
      <MenuItemButtonWrapper
        isActive={isActive}
        onClick={onChangeMenuItemHandler}
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
      </MenuItemButtonWrapper>
    </LinkWrapper>
  );
};
