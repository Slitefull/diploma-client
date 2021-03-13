import React, { useState } from 'react';
import { reduxForm, reset } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { goodsActions } from './store';
import { AddGoodsForm } from './add-goods-form/AddGoodsForm';
import { ProductPreview } from './product-preview/ProductPreview';
import { greeting } from '../../helpers/greeting';
import { profileSelectors } from '../profile/selectors';

import { Container, PagePanel, PanelText, Wrapper } from '../../styled';


export const AddGoods = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userName = useSelector(profileSelectors.getUserName);
  const time = new Date();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(null);
  const [inStockCount, setInStockCount] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (data) => {
    const commodity = { ...data, category };
    dispatch(goodsActions.createGoods(commodity));
    setName('');
    setDescription('');
    setCategory('');
    setPrice(null);
    setInStockCount(null);
    setDiscount(null);
    setThumbnail('');
    dispatch(reset('add-goods'));
  };

  return (
    <>
      <PagePanel>
        {greeting((time.getHours()), userName)}
        <PanelText subtitle>
          {t('goodTimeToCreateNewCommodityYes')}
        </PanelText>
      </PagePanel>
      <Container style={{ maxWidth: 1600 }}>
        <Wrapper row justify style={{ margin: '100px 0' }}>
          <AddGoodsReduxForm
            onSubmit={handleSubmit}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            inStockCount={inStockCount}
            setInStockCount={setInStockCount}
            discount={discount}
            setDiscount={setDiscount}
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            isPreview={isPreview}
            setIsPreview={setIsPreview}
          />
          {isPreview && (
            <ProductPreview
              name={name}
              description={description}
              category={category}
              price={price}
              inStockCount={inStockCount}
              discount={discount}
              thumbnail={thumbnail}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

const AddGoodsReduxForm = reduxForm({ form: 'add-goods' })(AddGoodsForm);
