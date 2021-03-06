import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { appSelectors } from '../../../../app/selectors';
import { Input } from '../../../../components/common/form-control/FormControl';
import { email, maxLengthCreator, required } from '../../../../helpers/validators/validators';

import { Form, FormField, FormLabel } from '../../../../components/common/form-control/styled';
import { Preloader } from '../../../../components/common/preloader/styled';
import { AuthButton } from '../../styled';


const maxLength15 = maxLengthCreator(15);

export const RegistrationForm = ({ handleSubmit }) => {
  const { t } = useTranslation();
  const isLoading = useSelector(appSelectors.getIsLoading);

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">{t('name')}</FormLabel>
      <FormField
        name="name"
        component={Input}
        validate={[maxLength15, required]}
      />
      <FormLabel htmlFor="surname">{t('surname')}</FormLabel>
      <FormField
        name="surname"
        component={Input}
        validate={[maxLength15, required]}
      />
      <FormLabel htmlFor="name">{t('username')}</FormLabel>
      <FormField
        name="userName"
        component={Input}
        validate={[maxLength15, required]}
      />
      <FormLabel htmlFor="email">{t('email')}</FormLabel>
      <FormField
        name="email"
        component={Input}
        validate={[required, email]}
      />
      <FormLabel htmlFor="password">{t('password')}</FormLabel>
      <FormField
        name="password"
        type="password"
        component={Input}
        validate={[maxLength15, required]}
      />
      <AuthButton fullWidth>
        {
          isLoading
            ? <Preloader small />
            : t('register')
        }
      </AuthButton>
    </Form>
  );
};
