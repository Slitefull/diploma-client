import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { pagesLinks, pagesTitles } from '../../../../consts';

import { NavLinkItem } from '../../menu/styled';
import { authActions } from '../../../../pages/auth/store';


export const DropdownMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Menu>
      <Menu.Item>
        <NavLinkItem to={pagesLinks.settings}>{pagesTitles.settings}</NavLinkItem>
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(authActions.logout())}>
        {t('logout')}
      </Menu.Item>
    </Menu>
  );
};
