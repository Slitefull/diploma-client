import React, { useCallback } from 'react';
import { reduxForm, reset } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { goodsActions } from './store';
import { goodsSelectors } from './selectors';
import { formsNames } from '../../constants/formsNames';
import { greeting } from '../../helpers/greeting';
import { AddGoodsForm } from './add-goods-form/AddGoodsForm';
import { ProductPreview } from './product-preview/ProductPreview';
import { profileSelectors } from '../profile/selectors';

import { Container, PagePanel, PageWrapper, PanelText } from '../../styled';


export const AddGoods = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userName = useSelector(profileSelectors.getName);
  const name = useSelector(goodsSelectors.getName);
  const description = useSelector(goodsSelectors.getDescription);
  const category = useSelector(goodsSelectors.getCategory);
  const price = useSelector(goodsSelectors.getPrice);
  const onStockCount = useSelector(goodsSelectors.getOnStockCount);
  const discount = useSelector(goodsSelectors.getDiscount);
  const thumbnail = useSelector(goodsSelectors.getThumbnail);
  const isPreview = useSelector(goodsSelectors.getIsPreview);

  const time = new Date();

  const handleSubmit = useCallback((data) => {
    const commodity = { ...data, category };
    dispatch(goodsActions.createGoods(commodity));
    dispatch(goodsActions.resetFields());
    dispatch(reset(formsNames.addGoods));
  }, [category]);

  return (
    <>
      <PagePanel>
        {greeting((time.getHours()), userName)}
        <PanelText subtitle>
          {t('goodTimeToCreateNewCommodityYes')}
        </PanelText>
      </PagePanel>
      <Container style={{ maxWidth: 1600 }}>
        <PageWrapper>
          <AddGoodsReduxForm
            onSubmit={handleSubmit}
            name={name}
            description={description}
            category={category}
            price={price}
            inStockCount={onStockCount}
            discount={discount}
            thumbnail={thumbnail}
            isPreview={isPreview}
          />
          {isPreview && (
            <ProductPreview
              name={name}
              description={description}
              category={category}
              price={price}
              onStockCount={onStockCount}
              discount={discount}
              thumbnail={thumbnail}
            />
          )}
        </PageWrapper>
      </Container>
    </>
  );
};

const AddGoodsReduxForm = reduxForm({ form: formsNames.addGoods })(AddGoodsForm);
