import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { profileSelectors } from '../selectors';
import { FormInput } from '../../../components/common/form-control/FormControl';
import { required } from '../../../helpers/validators/validators';

import { Wrapper } from '../../../styled';
import { Button, ProfileFormWrapper } from '../styled';
import { AvatarLetter } from '../../../components/header/profile-icon/styled';
import { FormDescription, FormField, FormLabel, FormTitle } from '../../../components/common/form-control/styled';


export const ProfileForm = ({ handleSubmit }) => {
  const { t } = useTranslation();
  const userNameLetter = useSelector(profileSelectors.getUserName).split('', 1)[0];

  return (
    <ProfileFormWrapper style={{ maxWidth: 1200 }} onSubmit={handleSubmit}>
      <FormTitle>{t('personalData')}</FormTitle>
      <FormDescription>{t('useThisPageToUpdateYourContactInformationAndChangeYourPassword')}</FormDescription>
      <AvatarLetter style={{ width: 100, height: 100, fontSize: 36 }}>{userNameLetter}</AvatarLetter>
      <Wrapper row justify>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('name')}</FormLabel>
          <FormField
            name="name"
            placeholder={t('inputYourName')}
            component={FormInput}
            validate={[required]}
          />
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('surname')}</FormLabel>
          <FormField
            name="surname"
            placeholder={t('inputYourSurname')}
            component={FormInput}
            validate={[required]}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper row justify>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('username')}</FormLabel>
          <FormField
            name="userName"
            placeholder={t('inputYourUsername')}
            component={FormInput}
            validate={[required]}
          />
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('email')}</FormLabel>
          <FormField
            name="email"
            placeholder={t('inputYourEmail')}
            component={FormInput}
            validate={[required]}
          />
        </Wrapper>
      </Wrapper>
      <FormLabel>{t('address')}</FormLabel>
      <FormField
        name="address"
        placeholder={t('inputYourAddress')}
        component={FormInput}
      />
      <Button onClick={handleSubmit}>{t('saveChanges')}</Button>
    </ProfileFormWrapper>
  );
};
