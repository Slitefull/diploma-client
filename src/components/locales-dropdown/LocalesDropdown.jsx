import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { getAllLocales, getLocaleFlag } from '../../locales/consts';
import { appActions } from '../../app/store';
import { appSelectors } from '../../app/selectors';
import { localStorageLocale } from '../../helpers/localStorageHelper';

import './style.css';
import { CustomMenu, LocaleFlag, LocalesDropdownTrigger, MenuItem } from './styled';


const LocalesDropdownMenu = ({ changeLanguage }) => {
  const menu = getAllLocales.map((locale) => (
    <MenuItem onClick={(localeInfo) => changeLanguage(localeInfo.key)} key={locale}>
      <LocaleFlag src={getLocaleFlag(locale)} />
    </MenuItem>
  ));

  return <CustomMenu>{menu}</CustomMenu>;
};

export const LocalesDropdown = () => {
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
      overlay={<LocalesDropdownMenu changeLanguage={changeLanguage} />}
      onClick={() => setVisible(!visible)}
    >
      <LocalesDropdownTrigger className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <LocaleFlag src={getLocaleFlag(appLocale)} />
      </LocalesDropdownTrigger>
    </Dropdown>
  );
};
