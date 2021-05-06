import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getAllLocales, getLocaleFlag, getLocaleName } from '../../locales/consts';
import { appActions } from '../../app/store';
import { appSelectors } from '../../app/selectors';
import { localStorageLocale } from '../../helpers/localStorageHelper';

import './style.css';
import { CustomMenu, DropdownLocaleName, LocaleFlag, LocaleName, LocalesDropdownTrigger, MenuItem } from './styled';


const LocalesDropdownMenu = ({ changeLanguage, isOpenSidebar }) => {
  const menu = getAllLocales.map((locale) => (
    <MenuItem onClick={(localeInfo) => changeLanguage(localeInfo.key)} key={locale}>
      <LocaleFlag src={getLocaleFlag(locale)} />
      {isOpenSidebar && (
        <DropdownLocaleName>
          {getLocaleName(locale)}
        </DropdownLocaleName>
      )}
    </MenuItem>
  ));

  return <CustomMenu>{menu}</CustomMenu>;
};

export const LocalesDropdown = ({ isOpenSidebar }) => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const appLocale = useSelector(appSelectors.getLocale);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(appActions.setLocale(lng));
    localStorage.setItem(localStorageLocale, lng);
    setVisible(false);
  };

  return (
    <Dropdown
      visible={visible}
      overlay={(
        <LocalesDropdownMenu
          changeLanguage={changeLanguage}
          isOpenSidebar={isOpenSidebar}
        />
      )}
      onClick={() => setVisible(!visible)}
    >
      <LocalesDropdownTrigger className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <LocaleFlag src={getLocaleFlag(appLocale)} />
        {isOpenSidebar && (
          <LocaleName>
            {getLocaleName(appLocale)}
            <DownOutlined style={{ fontSize: 12, marginLeft: 10 }} />
          </LocaleName>
        )}
      </LocalesDropdownTrigger>
    </Dropdown>
  );
};
