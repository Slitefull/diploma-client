import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Steps } from 'antd';
import { goodsActions } from '../store';
import { goodsSelectors } from '../selectors';
import { FirstStep } from './first-step/FirstStep';
import { SecondStep } from './second-step/SecondStep';
import { ThirdStep } from './third-step/ThirdStep';

import { AddGoodsWrapper } from './styled';
import { Wrapper } from '../../../styled';


const { Step } = Steps;

export const AddGoodsForm = (props) => {
  const { handleSubmit, name, description, category, price, onStockCount, discount, thumbnail, isPreview } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentStep = useSelector(goodsSelectors.getCurrentStep);

  const onNextStepHandler = useCallback(() => dispatch(goodsActions.setCurrentStep(currentStep + 1)), [currentStep]);
  const onPrevStepHandler = useCallback(() => dispatch(goodsActions.setCurrentStep(currentStep - 1)), [currentStep]);
  const onSetIsPreviewHandler = useCallback(() => dispatch(goodsActions.setIsPreview(!isPreview)), [isPreview]);

  // TODO fix disabled price
  const isDisabled = name === '' || description === '' || category === '' || (currentStep === 2 && price === null);

  const steps = [
    {
      title: t('general'),
      content: <FirstStep />,
    },
    {
      title: t('additional'),
      content: <SecondStep
        price={price}
        onStockCount={onStockCount}
        discount={discount}
      />,
    },
    {
      title: t('photo'),
      content: <ThirdStep thumbnail={thumbnail} />,
    },
  ];

  return (
    <AddGoodsWrapper onSubmit={handleSubmit}>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step
            key={item.title}
            title={item.title}
          />
        ))}
      </Steps>
      {steps[currentStep].content}
      <Wrapper row center justify style={{ marginTop: 20 }}>
        {currentStep > 0 && (
          <Button onClick={onPrevStepHandler}>
            {t('previous')}
          </Button>
        )}
        <Button
          type="primary"
          onClick={onSetIsPreviewHandler}
        >
          {isPreview ? t('hidePreview') : t('showPreview')}
        </Button>
        {currentStep < steps.length - 1 && (
          <Button
            disabled={isDisabled}
            onClick={onNextStepHandler}
          >
            {t('next')}
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button
            type="primary"
            onClick={handleSubmit}
          >
            {t('done')}
          </Button>
        )}
      </Wrapper>
    </AddGoodsWrapper>
  );
};
