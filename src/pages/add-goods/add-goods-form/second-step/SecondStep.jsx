import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../../components/common/form-control/FormControl';
import { onlyDigits, required } from '../../../../helpers/validators/validators';

import { FormField, FormLabel } from '../../../../components/common/form-control/styled';
import { Wrapper } from '../../../../styled';


export const SecondStep = ({ price, setPrice, inStockCount, setInStockCount, discount, setDiscount }) => {
  const { t } = useTranslation();
  const [isOpenInStockModal, setIsOpenInStockModal] = useState(false);
  const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false);

  return (
    <div>
      <FormLabel>
        {t('price')}
        {' '}
        *
      </FormLabel>
      <FormField
        name="price"
        component={Input}
        validate={[required, onlyDigits]}
        onChange={(e) => setPrice(e.target.value)}
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
          {
            isOpenInStockModal && (
              <>
                <FormLabel>{t('howManyGoodsDoYouHaveOnTheStock')}</FormLabel>
                <FormField
                  name="onStockCount"
                  component={Input}
                  validate={[onlyDigits]}
                  onChange={(e) => setInStockCount(e.target.value)}
                  placeholder={inStockCount}
                />
              </>
            )
          }
        </Wrapper>
        <Wrapper inline style={{ margin: 10, marginLeft: 0 }}>
          <Field
            name="discount"
            component={Checkbox}
            onClick={(e) => setIsOpenDiscountModal(e.target.checked)}
          />
          <FormLabel style={{ display: 'inline', margin: 10 }}>{t('doYouWantToAddDiscount')}</FormLabel>
          {
            isOpenDiscountModal && (
              <>
                <FormLabel>
                  {t('setYourDiscount')}
                </FormLabel>
                <FormField
                  name="discount"
                  component={Input}
                  validate={[onlyDigits]}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder={discount}
                />
              </>
            )
          }
        </Wrapper>
      </Wrapper>
    </div>
  );
};
