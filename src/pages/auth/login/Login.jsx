import React from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/logo.svg';
import { pagesLinks } from '../../../consts';
import { authActions } from '../store';
import { LoginForm } from './login-form/LoginForm';

import { Logo } from '../../../styled';
import { LoginBackground } from '../styled';
import { AuthLink, FormTitle, FormWrapper } from '../../../components/common/form-control/styled';


export const Login = () => {
  const dispatch = useDispatch();
  const login = (data) => dispatch(authActions.login(data));

  return (
    <>
      <FormWrapper>
        <Logo src={logo} center />
        <FormTitle center>Login</FormTitle>
        <LoginReduxForm onSubmit={login} />
        <AuthLink to={pagesLinks.registration}>Dont have an account? Register it</AuthLink>
      </FormWrapper>
      <LoginBackground />
    </>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
