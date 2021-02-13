import styled from 'styled-components'

export const ProductPreviewWrapper = styled.div`
  max-width: 600px;
  border: 0 solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
  background: #ffffff;
  padding: 25px;
`

export const ProductName = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0;
  display: inline;
`

export const ProductDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  margin-bottom: 0;
`

export const ProductCategory = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  border-radius: 10px;
  background: #85ffa3;
  padding: 5px;
  margin: 0 0 0 15px;
`

export const ProductInStock = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  border-radius: 10px;
  background: #85ffa3;
  padding: 5px;
  margin: 0 0 0 15px;
`

export const ProductPrice = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #f84147;
  margin-bottom: 0;
`

export const ProductDiscount = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: black;
  margin-bottom: 0;
`

export const ProductThumbnail = styled.img`
  display: block;
  max-width: 300px;
  margin: auto;
`
