import React, { useCallback, useState } from 'react';
import { Field } from 'redux-form';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { FormInput } from '../../../../components/common/form-control/FormControl';
import { onlyDigits, required } from '../../../../helpers/validators/validators';

import { FormField, FormLabel } from '../../../../components/common/form-control/styled';
import { Wrapper } from '../../../../styled';
import { goodsActions } from '../../store';


export const SecondStep = ({ price, onStockCount, discount }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isOpenInStockModal, setIsOpenInStockModal] = useState(false);
  const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false);

  const onSetPriceHandler = useCallback((e) => dispatch(goodsActions.setPrice(e.target.value)), []);
  const onSetOnStockCountHandler = useCallback((e) => dispatch(goodsActions.setOnStockCount(e.target.value)), []);
  const onSetDiscountHandler = useCallback((e) => dispatch(goodsActions.setDiscount(e.target.value)), []);

  return (
    <div>
      <FormLabel>
        {`${t('price')} *`}
      </FormLabel>
      <FormField
        name="price"
        component={FormInput}
        validate={[required, onlyDigits]}
        onChange={onSetPriceHandler}
        placeholder={price}
      />
      <Wrapper>
        <Wrapper inline style={{ margin: 10, marginLeft: 0 }}>
          <Field
            name="stock"
            component={Checkbox}
            onClick={(e) => setIsOpenInStockModal(e.target.checked)}
          />
          <FormLabel style={{ display: 'inline', margin: 10 }}>
            {t('isYourGoodsInTheStock')}
          </FormLabel>
          {isOpenInStockModal && (
            <>
              <FormLabel>
                {t('howManyGoodsDoYouHaveOnTheStock')}
              </FormLabel>
              <FormField
                name="onStockCount"
                component={FormInput}
                validate={[onlyDigits]}
                onChange={onSetOnStockCountHandler}
                placeholder={onStockCount}
              />
            </>
          )}
        </Wrapper>
        <Wrapper inline style={{ margin: 10, marginLeft: 0 }}>
          <Field
            name="discount"
            component={Checkbox}
            onClick={(e) => setIsOpenDiscountModal(e.target.checked)}
          />
          <FormLabel style={{ display: 'inline', margin: 10 }}>
            {t('doYouWantToAddDiscount')}
          </FormLabel>
          {isOpenDiscountModal && (
            <>
              <FormLabel>
                {t('setYourDiscount')}
              </FormLabel>
              <FormField
                name="discount"
                component={FormInput}
                validate={[onlyDigits]}
                onChange={onSetDiscountHandler}
                placeholder={discount}
              />
            </>
          )}
        </Wrapper>
      </Wrapper>
    </div>
  );
};
