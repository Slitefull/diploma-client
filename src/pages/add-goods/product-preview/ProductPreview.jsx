import React from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import {
  ProductCategory,
  ProductDescription, ProductDiscount, ProductInStock,
  ProductName,
  ProductPreviewWrapper,
  ProductPrice,
  ProductThumbnail,
} from './styled';
import { Wrapper } from '../../../styled';


export const ProductPreview = ({ name, description, category, discount, price, thumbnail, inStockCount }) => {
  const { t } = useTranslation();

  return (
    <ProductPreviewWrapper>
      <Wrapper row center justify>
        <ProductName>{name}</ProductName>
        <ProductInStock onStock={inStockCount}>
          {
            inStockCount
              ? (
                <>
                  <CheckCircleOutlined />
                  {' '}
                  {t('onTheStock')}
                </>
              )
              : (
                <>
                  <CloseCircleOutlined />
                  {' '}
                  {t('notOnTheStock')}
                </>
              )
          }
        </ProductInStock>
        {
          category
            ? <ProductCategory>{category}</ProductCategory>
            : null
        }
      </Wrapper>
      <ProductDescription>{description}</ProductDescription>
      {
        thumbnail
          ? <ProductThumbnail src={thumbnail} alt="Commodity" />
          : null
      }
      <ProductDiscount>
        {
          discount
            ? `${price}₴`
            : null
        }
      </ProductDiscount>
      <ProductPrice>
        {
          price
            ? `${price - discount}₴`
            : null
        }
      </ProductPrice>
    </ProductPreviewWrapper>
  );
};
