import React from 'react'
import { Input, Textarea } from '../../../../components/common/form-control/FormControl'
import { FormField, FormLabel } from '../../../../components/common/form-control/styled'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../../../profile/selectors'
import { Greeting } from '../styled'
import { maxLengthCreator, required } from '../../../../helpers/validators/validators'


const maxLength40 = maxLengthCreator(40)
const maxLength500 = maxLengthCreator(500)

export const FirstStep = ({setName, setDescription, setCategory}) => {
  const userName = useSelector(profileSelectors.getUserName)

  return (
    <div>
      <Greeting>Welcome {userName}, there you can add new goods</Greeting>
      <FormLabel htmlFor={'name'}>Good's name *</FormLabel>
      <FormField
        name={'name'}
        component={Input}
        validate={[required, maxLength40]}
        onChange={e => setName(e.target.value)}
      />
      <FormLabel htmlFor={'description'}>Description *</FormLabel>
      <FormField
        name={'description'}
        component={Textarea}
        validate={[required, maxLength500]}
        onChange={e => setDescription(e.target.value)}
      />
      <FormLabel htmlFor={'category'}>Category *</FormLabel>
      <FormField
        name={'category'}
        component={Input}
        validate={[required]}
        onChange={e => setCategory(e.target.value)}
      />
    </div>
  )
}