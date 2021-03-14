import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { profileSelectors } from '../profile/selectors';

import { SettingsWrapper } from './styled';
import { CustomSettingOutlined } from '../profile/styled';
import { Container, PagePanel, PanelText } from '../../styled';
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
          {`${t('thereYouCanChangeSettings')}, ${name}`}
        </PanelText>
      </PagePanel>
      <Container style={{ maxWidth: 1650, padding: '40px 0' }}>
        <SettingsWrapper>
          <FormDescription>{t('useThisPageToUpdateYourSettings')}</FormDescription>
        </SettingsWrapper>
      </Container>
    </>
  );
};
