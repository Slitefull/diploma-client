import React from 'react'
import {Input} from '../../../components/common/form-control/FormControl'
import {maxLengthCreator, required} from '../../../helpers/validators/validators'
import {Button} from '../../../styled'
import {Form, FormField, FormLabel} from '../../../components/common/form-control/styled'


const maxLength15 = maxLengthCreator(15)

export const LoginForm = (props: any) => (
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