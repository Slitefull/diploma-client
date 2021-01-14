import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { RegistrationForm } from './registration-form/RegistrationForm'
import logo from '../../../assets/logo.svg'

import { authActions } from '../store'
import { AuthLink, FormTitle, FormWrapper } from '../../../components/common/form-control/styled'
import { pagesLinks } from '../../../consts'
import { RegistrationBackground } from '../styled'
import { Logo } from '../../../styled'


export const Registration = () => {
  const dispatch = useDispatch()
  const register = data => dispatch(authActions.register(data))

  return (
    <>
      <FormWrapper>
        <Logo src={logo} center/>
        <FormTitle>Registration</FormTitle>
        <RegistrationReduxForm onSubmit={register}/>
        <AuthLink to={pagesLinks.login}>Already have an account? Login, please</AuthLink>
      </FormWrapper>
      <RegistrationBackground/>
    </>
  )
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)
