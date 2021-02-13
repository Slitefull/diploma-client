import React from 'react'
import {
  ProductCategory,
  ProductDescription, ProductDiscount, ProductInStock,
  ProductName,
  ProductPreviewWrapper,
  ProductPrice,
  ProductThumbnail
} from './styled'
import { Wrapper } from '../../../styled'

export const ProductPreview = ({ name, description, category, discount, price, thumbnail, inStockCount }) => (
  <ProductPreviewWrapper>
    <Wrapper row center justify>
      <ProductName>{name}</ProductName>
      {inStockCount
        ? <ProductInStock>Product is on the stock</ProductInStock>
        : <ProductInStock>Product is not on the stock</ProductInStock>
      }
      {category ? <ProductCategory>{category}</ProductCategory> : null}
    </Wrapper>
    <ProductDescription>{description}</ProductDescription>
    {thumbnail ? <ProductThumbnail src={thumbnail} alt="Commodity"/> : null}
    <ProductDiscount>{discount}</ProductDiscount>
    <ProductPrice>{price ? `${price}₴` : null}</ProductPrice>
  </ProductPreviewWrapper>
)
