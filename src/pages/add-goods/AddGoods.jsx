import React from 'react'
import { reduxForm } from 'redux-form'
import { AddGoodsForm } from './add-goods-form/AddGoodsForm'

import { Container } from '../../styled'


export const AddGoods = () => {
  const handleSubmit = data => console.log(data)

  return (
    <Container style={{maxWidth: 700}}>
      <AddGoodsReduxForm onSubmit={handleSubmit}/>
    </Container>
  )
}

const AddGoodsReduxForm = reduxForm({ form: 'add-goods' })(AddGoodsForm)