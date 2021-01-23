import React, { useState } from 'react'
import { FormField, FormLabel } from '../../../../components/common/form-control/styled'
import { Input } from '../../../../components/common/form-control/FormControl'
import { onlyDigits, required } from '../../../../helpers/validators/validators'
import { Checkbox } from 'antd'
import { Field } from 'redux-form'
import { Wrapper } from '../../../../styled'


export const SecondStep = ({setPrice, setInStockCount, setDiscount}) => {
  const [isOpenInStockModal, setIsOpenInStockModal] = useState(false)
  const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false)

  return (
    <div>
      <FormLabel htmlFor={'price'}>Price *</FormLabel>
      <FormField
        name={'price'}
        component={Input}
        validate={[required, onlyDigits]}
      />
      <Wrapper>
        <Wrapper inline style={{margin: 10, marginLeft: 0}}>
          <Field
            name={'stock'}
            component={Checkbox}
            onClick={e => setIsOpenInStockModal(e.target.checked)}
          />
          <FormLabel
            style={{display: 'inline', margin: 10}}
            htmlFor={'stock'}
          >
            Is your goods in the stock?
          </FormLabel>
        </Wrapper>
        <Wrapper inline style={{margin: 10, marginLeft: 0}}>
          <Field
            name={'discount'}
            component={Checkbox}
            onClick={e => setIsOpenDiscountModal(e.target.checked)}
          />
          <FormLabel
            style={{display: 'inline', margin: 10}}
            htmlFor={'discount'}
          >
            Do you want to add a discount?
          </FormLabel>
        </Wrapper>
      </Wrapper>
    </div>
  )
}