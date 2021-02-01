import React from 'react'
import { reduxForm } from 'redux-form'
import { AddGoodsForm } from './add-goods-form/AddGoodsForm'

import { Container } from '../../styled'
import { useDispatch } from 'react-redux'
import { goodsActions } from './store'


export const AddGoods = () => {
  const dispatch = useDispatch()
  const handleSubmit = data => dispatch(goodsActions.createGoods(data))

  return (
    <Container style={{ maxWidth: 700 }}>
      <AddGoodsReduxForm onSubmit={handleSubmit}/>
    </Container>
  )
}

const AddGoodsReduxForm = reduxForm({ form: 'add-goods' })(AddGoodsForm)