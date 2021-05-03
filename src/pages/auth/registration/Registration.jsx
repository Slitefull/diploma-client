import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RegistrationForm } from './registration-form/RegistrationForm';
import { formsNames } from '../../../constants/formsNames';
import { authActions } from '../store';
import logo from '../../../assets/logo.svg';

import { AuthLink, FormTitle, FormWrapper } from '../../../components/common/form-control/styled';
import { pagesLinks } from '../../../consts';
import { RegistrationBackground } from '../styled';
import { Logo } from '../../../styled';


export const Registration = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onRegistrationHandler = useCallback((data) => dispatch(authActions.register(data)), []);

  return (
    <>
      <FormWrapper>
        <Logo src={logo} center />
        <FormTitle center>
          {t('registration')}
        </FormTitle>
        <RegistrationReduxForm onSubmit={onRegistrationHandler} />
        <AuthLink to={pagesLinks.login}>
          {t('alreadyHaveAnAccountLoginPlease')}
        </AuthLink>
      </FormWrapper>
      <RegistrationBackground />
    </>
  );
};

const RegistrationReduxForm = reduxForm({ form: formsNames.registration })(RegistrationForm);
