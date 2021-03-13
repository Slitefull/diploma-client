import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput, Textarea } from '../../../components/common/form-control/FormControl';
import { ProfileIcon } from '../../../components/header/profile-icon/ProfileIcon';
import { maxLengthCreator, onlyDigits, onlyLetters, onlyUrl, required } from '../../../helpers/validators/validators';

import { Wrapper } from '../../../styled';
import { AddressWrapper, Button, CustomFormField, ProfileFormWrapper } from '../styled';
import { FormDescription, FormField, FormLabel, FormTitle } from '../../../components/common/form-control/styled';


const maxLength5 = maxLengthCreator(5);
const maxLength40 = maxLengthCreator(40);
const maxLength200 = maxLengthCreator(200);

export const ProfileForm = ({ handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <ProfileFormWrapper style={{ maxWidth: 1200 }} onSubmit={handleSubmit}>
      <FormTitle>{t('personalData')}</FormTitle>
      <FormDescription>{t('useThisPageToUpdateYourContactInformationAndChangeYourPassword')}</FormDescription>
      <ProfileIcon isBig />
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
      <Wrapper row justify>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('city')}</FormLabel>
          <AddressWrapper>
            <CustomFormField
              name="city"
              placeholder={t('inputYourCity')}
              component={FormInput}
              validate={[onlyLetters, maxLength40]}
            />
            <CustomFormField
              name="postalCode"
              placeholder={t('postalCode')}
              component={FormInput}
              width="25%"
              secondElement
              validate={[onlyDigits, maxLength5]}
            />
          </AddressWrapper>
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>{t('address')}</FormLabel>
          <FormField
            name="address"
            placeholder={t('inputYourAddress')}
            component={FormInput}
            validate={[required]}
          />
        </Wrapper>
      </Wrapper>
      <FormLabel>{t('avatarURL')}</FormLabel>
      <FormField
        name="avatar"
        placeholder={t('inputAvatarURL')}
        component={FormInput}
        validate={[onlyUrl]}
      />
      <FormLabel>{t('status')}</FormLabel>
      <FormField
        name="status"
        placeholder={t('inputYourStatus')}
        component={Textarea}
        validate={[maxLength200]}
      />
      <Button onClick={handleSubmit}>{t('saveChanges')}</Button>
    </ProfileFormWrapper>
  );
};
