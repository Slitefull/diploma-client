import React, { useState } from 'react'
import { Field } from 'redux-form'
import { Checkbox } from 'antd'
import { Input } from '../../../../components/common/form-control/FormControl'
import { onlyDigits, required } from '../../../../helpers/validators/validators'

import { FormField, FormLabel } from '../../../../components/common/form-control/styled'
import { Wrapper } from '../../../../styled'


export const SecondStep = ({ price, setPrice, inStockCount, setInStockCount, discount, setDiscount }) => {
  const [isOpenInStockModal, setIsOpenInStockModal] = useState(false)
  const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false)

  return (
    <div>
      <FormLabel htmlFor={'price'}>Price *</FormLabel>
      <FormField
        name={'price'}
        component={Input}
        validate={[required, onlyDigits]}
        onChange={e => setPrice(e.target.value)}
        placeholder={price}
      />
      <Wrapper>
        <Wrapper inline style={{ margin: 10, marginLeft: 0 }}>
          <Field
            name={'stock'}
            component={Checkbox}
            onClick={e => setIsOpenInStockModal(e.target.checked)}
          />
          <FormLabel
            style={{ display: 'inline', margin: 10 }}
            htmlFor={'stock'}
          >
            Is your goods in the stock?
          </FormLabel>
          {
            isOpenInStockModal && <>
              <FormLabel htmlFor={'onStockCount'}>
                How many goods do you have on the stock?
              </FormLabel>
              <FormField
                name={'onStockCount'}
                component={Input}
                validate={[onlyDigits]}
                onChange={e => setInStockCount(e.target.value)}
                placeholder={inStockCount}
              />
            </>
          }
        </Wrapper>
        <Wrapper inline style={{ margin: 10, marginLeft: 0 }}>
          <Field
            name={'discount'}
            component={Checkbox}
            onClick={e => setIsOpenDiscountModal(e.target.checked)}
          />
          <FormLabel
            style={{ display: 'inline', margin: 10 }}
            htmlFor={'discount'}
          >
            Do you want to add a discount?
          </FormLabel>
          {
            isOpenDiscountModal && <>
              <FormLabel htmlFor={'discount'}>
                Set your discount
              </FormLabel>
              <FormField
                name={'discount'}
                component={Input}
                validate={[onlyDigits]}
                onChange={e => setDiscount(e.target.value)}
                placeholder={discount}
              />
            </>
          }
        </Wrapper>
      </Wrapper>
    </div>
  )
}