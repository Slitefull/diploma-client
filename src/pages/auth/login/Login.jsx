import React, { useCallback } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/logo.svg';
import { authActions } from '../store';
import { pagesLinks } from '../../../consts';
import { formsNames } from '../../../constants/formsNames';
import { LoginForm } from './login-form/LoginForm';

import { Logo } from '../../../styled';
import { LoginBackground } from '../styled';
import { AuthLink, FormTitle, FormWrapper } from '../../../components/common/form-control/styled';


export const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLoginHandler = useCallback((data) => dispatch(authActions.login(data)), []);

  return (
    <>
      <FormWrapper>
        <Logo src={logo} center />
        <FormTitle center>
          {t('login')}
        </FormTitle>
        <LoginReduxForm onSubmit={onLoginHandler} />
        <AuthLink to={pagesLinks.registration}>
          {t('dontHaveAnAccountRegisterIt')}
        </AuthLink>
      </FormWrapper>
      <LoginBackground />
    </>
  );
};

const LoginReduxForm = reduxForm({ form: formsNames.login })(LoginForm);
