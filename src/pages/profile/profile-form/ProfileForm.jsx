import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ProfileFormWrapper } from '../styled';
import { FormDescription, FormField, FormLabel, FormTitle } from '../../../components/common/form-control/styled';
import { Input } from '../../../components/common/form-control/FormControl';
import { required } from '../../../helpers/validators/validators';
import { Wrapper } from '../../../styled';
import { profileSelectors } from '../selectors';
import { AvatarImage, AvatarLetter } from '../../../components/header/profile-icon/styled';


export const ProfileForm = ({ handleSubmit }) => {
  const { t } = useTranslation();
  const userNameLetter = useSelector(profileSelectors.getUserName).split('', 1)[0];
  const avatar = useSelector(profileSelectors.getUserAvatar);

  return (
    <ProfileFormWrapper style={{ maxWidth: 1200 }} onSubmit={handleSubmit}>
      <FormTitle>{t('personalData')}</FormTitle>
      <FormDescription>{t('useThisPageToUpdateYourContactInformationAndChangeYourPassword')}</FormDescription>
      {
        avatar
          ? <AvatarImage src={avatar} style={{ width: 100, height: 100 }} />
          : <AvatarLetter style={{ width: 100, height: 100, fontSize: 36 }}>{userNameLetter}</AvatarLetter>
      }
      <Wrapper row justify>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('name')}</FormLabel>
          <FormField
            name="name"
            placeholder={t('inputYourName')}
            component={Input}
            validate={[required]}
          />
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('surname')}</FormLabel>
          <FormField
            name="surname"
            placeholder={t('inputYourSurname')}
            component={Input}
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
            component={Input}
            validate={[required]}
          />
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('email')}</FormLabel>
          <FormField
            name="email"
            placeholder={t('inputYourEmail')}
            component={Input}
            validate={[required]}
          />
        </Wrapper>
      </Wrapper>
      <FormLabel>{t('address')}</FormLabel>
      <FormField
        name="address"
        placeholder={t('inputYourAddress')}
        component={Input}
      />
      <Button onClick={handleSubmit}>{t('saveChanges')}</Button>
    </ProfileFormWrapper>
  );
};
