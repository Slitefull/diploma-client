import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getAllLocales, getLocaleFlag, getLocaleName } from '../../../locales/consts';
import { CustomMenu, DropdownLocaleName, LocaleFlag, LocaleName, MenuItem } from './styled';
import { appActions } from '../../../app/store';
import { appSelectors } from '../../../app/selectors';
import { localStorageLocale } from '../../../helpers/localStorageHelper';


const LocalesDropdownMenu = ({ changeLanguage }) => {
  const menu = getAllLocales.map((locale) => (
    <MenuItem onClick={(localeInfo) => changeLanguage(localeInfo.key)} key={locale}>
      <LocaleFlag src={getLocaleFlag(locale)}/>
      <DropdownLocaleName>{getLocaleName(locale)}</DropdownLocaleName>
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
      overlay={<LocalesDropdownMenu changeLanguage={changeLanguage}/>}
      onClick={() => setVisible(!visible)}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <LocaleFlag src={getLocaleFlag(appLocale)}/>
        <LocaleName>
          {getLocaleName(appLocale)}
          <DownOutlined style={{ fontSize: 12, marginLeft: 10 }}/>
        </LocaleName>
      </a>
    </Dropdown>
  );
};
