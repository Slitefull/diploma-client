import React from 'react'
import { Input } from '../../../../components/common/form-control/FormControl'
import { onlyUrl } from '../../../../helpers/validators/validators'

import { FormField, FormLabel } from '../../../../components/common/form-control/styled'


export const ThirdStep = ({ setThumbnail }) => (
  <div>
    <FormLabel htmlFor={'thumbnail'}>Thumbnail</FormLabel>
    <FormField
      name={'thumbnail'}
      component={Input}
      validate={[onlyUrl]}
      onChange={e => setThumbnail(e.target.value)}
    />
  </div>
)