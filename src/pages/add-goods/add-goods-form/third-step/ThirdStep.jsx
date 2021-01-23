import React from 'react'
import { FormField, FormLabel } from '../../../../components/common/form-control/styled'
import { Input } from '../../../../components/common/form-control/FormControl'


export const ThirdStep = ({setThumbnail}) => {
  return (
    <div>
      <FormLabel htmlFor={'thumbnail'}>Thumbnail</FormLabel>
      <FormField
        name={'thumbnail'}
        component={Input}
        // validate={[required, email]}
      />
    </div>
  )
}