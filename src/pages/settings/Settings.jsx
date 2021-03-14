import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Switch } from 'antd';
import { profileSelectors } from '../profile/selectors';

import { CustomSettingOutlined, SettingsWrapper } from './styled';
import { PagePanel, PanelText, Wrapper } from '../../styled';
import { FormDescription } from '../../components/common/form-control/styled';


export const Settings = () => {
  const { t } = useTranslation();
  const name = useSelector(profileSelectors.getUserName);

  return (
    <>
      <PagePanel>
        <CustomSettingOutlined />
        <PanelText center>{t('settings')}</PanelText>
        <PanelText subtitle center>
          {`${t('thereYouCanChangeYourSettings')}, ${name}`}
        </PanelText>
      </PagePanel>
      <SettingsWrapper style={{ minWidth: 'auto' }}>
        <FormDescription>{t('useThisPageToUpdateYourSettings')}</FormDescription>
        <Wrapper row justify style={{ marginBottom: 10 }}>
          {t('darkTheme')}
          <Switch />
        </Wrapper>
        <Wrapper row justify style={{ marginBottom: 10 }}>
          {t('enablePushNotifications')}
          <Switch />
        </Wrapper>
        <Wrapper row justify style={{ marginBottom: 10 }}>
          {t('enableEmailNotifications')}
          <Switch />
        </Wrapper>
      </SettingsWrapper>
    </>
  );
};
