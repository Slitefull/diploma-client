import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelectors } from '../../pages/profile/selectors';
import { sidebarActions } from './store';
import { sidebarSelectors } from './selectors';
import { pagesLinks } from '../../consts';
import { localStorageCurrentMenuItem, menu, menuKeys } from '../../constants/menu';
import { MenuItemButton } from './MenuItemButton/MenuItemButton';
import { LogoutButton } from './LogoutButton/LogoutButton';
import arrow from '../../assets/icons/arrow-left.svg';
import logout from '../../assets/icons/logout.svg';
import logo from '../../assets/logo.svg';

import { Wrapper } from '../../styled';
import {
  Avatar,
  AvatarWrapper,
  CloseSidebarButtonArrow,
  CloseSidebarButtonWrapper,
  CustomHr,
  Logo,
  MenuItemsWrapper,
  SidebarWrapper,
  UserName,
} from './styled';
import { LocalesDropdown } from '../locales-dropdown/LocalesDropdown';


export const Sidebar = () => {
  const dispatch = useDispatch();

  const userName = useSelector(profileSelectors.getUserName);
  const userNameLetter = useSelector(profileSelectors.getName).split('', 1)[0];
  const avatar = useSelector(profileSelectors.getAvatar);
  const isOpenSidebar = useSelector(sidebarSelectors.getIsOpenSidebar);
  const activeMenuItem = useSelector(sidebarSelectors.getCurrentMenuItem);

  const onOpenSidebarHandler = useCallback(() => {
    dispatch(sidebarActions.setIsOpenSidebar(!isOpenSidebar));
  }, [isOpenSidebar]);

  const onClickAvatarHandler = useCallback(() => {
    dispatch(sidebarActions.setCurrentMenuItem(menuKeys.profile));
    localStorage.setItem(localStorageCurrentMenuItem, menuKeys.profile);
  }, []);

  return (
    <SidebarWrapper isOpen={isOpenSidebar}>
      <Wrapper row justify center>
        <Wrapper full center>
          <Logo src={logo} />
          <CustomHr />
        </Wrapper>
        <CloseSidebarButtonWrapper onClick={onOpenSidebarHandler}>
          <CloseSidebarButtonArrow
            src={arrow}
            isRotated={!isOpenSidebar}
          />
        </CloseSidebarButtonWrapper>
      </Wrapper>
      <MenuItemsWrapper isOpen={isOpenSidebar}>
        <Wrapper full>
          <AvatarWrapper
            to={pagesLinks.profile}
            isFull={isOpenSidebar}
            onClick={onClickAvatarHandler}
            isActive={activeMenuItem === menuKeys.profile}
          >
            {
              avatar
                ? <Avatar src={avatar} />
                : <>{userNameLetter}</>
            }
            {isOpenSidebar && (
              <UserName>
                {userName}
              </UserName>
            )}
          </AvatarWrapper>
          {menu.map((item) => (
            <MenuItemButton
              name={item.name}
              title={item.title}
              link={item.link}
              icon={item.icon}
              isFull={isOpenSidebar}
              isActive={activeMenuItem === item.name}
            />
          ))}
        </Wrapper>
        <Wrapper full>
          <CustomHr />
          <LogoutButton
            icon={logout}
            isFull={isOpenSidebar}
          />
          <LocalesDropdown />
        </Wrapper>
      </MenuItemsWrapper>
    </SidebarWrapper>
  );
};
