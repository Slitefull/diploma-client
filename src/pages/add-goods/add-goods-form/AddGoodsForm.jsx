import React, { useState } from 'react';
import { Button, Steps } from 'antd';
import { FirstStep } from './first-step/FirstStep';
import { SecondStep } from './second-step/SecondStep';
import { ThirdStep } from './third-step/ThirdStep';

import { AddGoodsWrapper } from './styled';
import { Wrapper } from '../../../styled';


const { Step } = Steps;

export const AddGoodsForm = (props) => {
  const {
    handleSubmit, name, setName, description, setDescription,
    category, setCategory, price, setPrice, inStockCount, setInStockCount,
    discount, setDiscount, thumbnail, setThumbnail, isPreview, setIsPreview,
  } = props;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  //TODO fix disabled price
  const isDisabled = name === '' || description === '' || category === '' || (current === 2 && price === null);

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
        price={price}
        setPrice={setPrice}
        inStockCount={inStockCount}
        setInStockCount={setInStockCount}
        discount={discount}
        setDiscount={setDiscount}
      />,
    },
    {
      title: 'Photo',
      content: <ThirdStep
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
      />,
    },
  ];

  return (
    <AddGoodsWrapper onSubmit={handleSubmit}>
      <Steps current={current}>
        {steps.map((item) => <Step key={item.title} title={item.title}/>)}
      </Steps>
      {steps[current].content}
      <Wrapper row center justify style={{ marginTop: 20 }}>
        {current > 0 && <Button onClick={() => prev()}>Previous</Button>}
        <Button
          type="primary"
          onClick={() => setIsPreview(!isPreview)}
        >
          {isPreview ? 'Hide preview' : 'Show preview'}
        </Button>
        {current < steps.length - 1 && <Button disabled={isDisabled} onClick={() => next()}>Next</Button>}
        {current === steps.length - 1 && <Button type='primary' onClick={handleSubmit}>Done</Button>}
      </Wrapper>
    </AddGoodsWrapper>
  );
};
