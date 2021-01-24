import React from 'react'
import { useSelector } from 'react-redux'
import { appSelectors } from '../../../../app/selectors'
import { email, maxLengthCreator, required } from '../../../../helpers/validators/validators'
import { Input } from '../../../../components/common/form-control/FormControl'

import { AuthButton } from '../../styled'
import { Preloader } from '../../../../components/common/preloader/styled'
import { Form, FormField, FormLabel } from '../../../../components/common/form-control/styled'


const maxLength15 = maxLengthCreator(15)

export const LoginForm = props => {
  const isLoading = useSelector(appSelectors.getIsLoading)

  return (
    <Form onSubmit={props.handleSubmit}>
      <FormLabel htmlFor={'email'}>Email address</FormLabel>
      <FormField
        name={'email'}
        component={Input}
        validate={[required, email]}
      />
      <FormLabel htmlFor={'password'}>Password</FormLabel>
      <FormField
        name={'password'}
        type={'password'}
        component={Input}
        validate={[maxLength15, required]}
      />
      <AuthButton fullWidth>{
        isLoading
          ? <Preloader small/>
          : 'Login'
      }</AuthButton>
    </Form>
  )
}