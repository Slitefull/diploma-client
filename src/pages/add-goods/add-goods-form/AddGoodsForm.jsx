import React, { useState } from 'react'
import { Button, Steps } from 'antd'
import { FirstStep } from './first-step/FirstStep'
import { SecondStep } from './second-step/SecondStep'
import { ThirdStep } from './third-step/ThirdStep'

import { AddGoodsWrapper, StepsAction } from './styled'


const { Step } = Steps;

export const AddGoodsForm = props => {
  const [current, setCurrent] = useState(0);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [inStockCount, setInStockCount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [thumbnail, setThumbnail] = useState('')

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const isDisabled = name === ''

  const steps = [
    {
      title: 'General',
      content: <FirstStep
        setName={setName}
        setDescription={setDescription}
        setCategory={setCategory}
      />,
    },
    {
      title: 'Additional',
      content: <SecondStep
        setPrice={setPrice}
        setInStockCount={setInStockCount}
        setDiscount={setDiscount}
      />,
    },
    {
      title: 'Photo',
      content: <ThirdStep
        setThumbnail={setThumbnail}
      />,
    },
  ];

  return (
    <AddGoodsWrapper onSubmit={props.handleSubmit}>
      <Steps current={current}>
        {steps.map(item => <Step key={item.title} title={item.title}/>)}
      </Steps>
      {steps[current].content}
      <StepsAction>
        {current < steps.length - 1 && <Button onClick={() => next()}>Next</Button>}
        {current === steps.length - 1 &&
        <Button disabled={isDisabled} type='primary' onClick={props.handleSubmit}>Done</Button>}
        {current > 0 && <Button style={{ margin: '0 8px' }} onClick={() => prev()}>Previous</Button>}
      </StepsAction>
    </AddGoodsWrapper>
  )
}