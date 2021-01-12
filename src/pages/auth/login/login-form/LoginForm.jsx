import React from 'react'
import { maxLengthCreator, required } from '../../../../helpers/validators/validators'
import { Form, FormField, FormLabel } from '../../../../components/common/form-control/styled'
import { Input } from '../../../../components/common/form-control/FormControl'
import { Button } from '../../../../styled'

const maxLength15 = maxLengthCreator(15)

export const LoginForm = props => (
	<Form onSubmit={props.handleSubmit}>
		<FormLabel htmlFor={'email'}>Email address</FormLabel>
		<FormField
			name={'email'}
			component={Input}
			validate={[required]}
		/>
		<FormLabel htmlFor={'password'}>Password</FormLabel>
		<FormField
			name={'password'}
			type={'password'}
			component={Input}
			validate={[maxLength15, required]}
		/>
		<Button fullWidth>Login</Button>
	</Form>
)