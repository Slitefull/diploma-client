import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelectors } from '../../pages/profile/selectors';
import { sidebarActions } from './store';
import { sidebarSelectors } from './selectors';
import { pagesLinks } from '../../consts';
import { MenuItemButton } from './MenuItemButton/MenuItemButton';
import { menu } from '../../constants/menu';
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


export const Sidebar = () => {
  const dispatch = useDispatch();

  const userName = useSelector(profileSelectors.getUserName);
  const avatar = useSelector(profileSelectors.getAvatar);
  const isOpenSidebar = useSelector(sidebarSelectors.getIsOpenSidebar);
  const activeMenuItem = useSelector(sidebarSelectors.getCurrentMenuItem);

  const onOpenSidebarHandler = useCallback(() => {
    dispatch(sidebarActions.setIsOpenSidebar(!isOpenSidebar));
  }, [isOpenSidebar]);

  const onClickAvatarHandler = useCallback(() => {
    dispatch(sidebarActions.setCurrentMenuItem('profile'));
  }, []);

  return (
    <SidebarWrapper
      isOpen={isOpenSidebar}
    >
      <Wrapper row justify center>
        <Wrapper>
          <Logo src={logo} />
          <CustomHr />
        </Wrapper>
        <CloseSidebarButtonWrapper
          onClick={onOpenSidebarHandler}
        >
          <CloseSidebarButtonArrow
            src={arrow}
            isRotated={!isOpenSidebar}
          />
        </CloseSidebarButtonWrapper>
      </Wrapper>
      <MenuItemsWrapper
        isOpen={isOpenSidebar}
      >
        <Wrapper full>
          <AvatarWrapper
            to={pagesLinks.profile}
            isFull={isOpenSidebar}
            onClick={onClickAvatarHandler}
          >
            <Avatar src={avatar} />
            {isOpenSidebar && <UserName>{userName}</UserName>}
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
            title="Logout"
            icon={logout}
            isFull={isOpenSidebar}
          />
        </Wrapper>
      </MenuItemsWrapper>
    </SidebarWrapper>
  );
};
