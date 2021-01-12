import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { LoginForm } from './login-form/LoginForm'
import { pagesLinks } from '../../consts'
import { authActions } from './store';
import logo from '../../assets/logo.svg'

import { AuthLink, FormTitle, FormWrapper } from '../../components/common/form-control/styled'
import { LoginBackground } from './styled'
import { Logo } from '../../styled'


export const Login = () => {
  const dispatch = useDispatch()
  const login = data => dispatch(authActions.login(data))

  return (
    <>
      <FormWrapper>
        <Logo src={logo} center/>
        <FormTitle>Login</FormTitle>
        <LoginReduxForm onSubmit={login}/>
        <AuthLink to={pagesLinks.registration}>Don't have an account? Register it</AuthLink>
      </FormWrapper>
      <LoginBackground/>
    </>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
