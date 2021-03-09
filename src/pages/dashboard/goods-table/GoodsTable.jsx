import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { goodsSelectors } from '../../add-goods/selectors';
import { TableThumbnail, TableTitle } from '../styled';


export const GoodsTable = () => {
  const { t } = useTranslation();
  const goods = useSelector(goodsSelectors.getAllGoods);

  const columns = [
    {
      title: <TableTitle>{t('photo')}</TableTitle>,
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (thumbnail) => <TableThumbnail src={thumbnail} />,
    },
    {
      title: <TableTitle>{t('name')}</TableTitle>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <TableTitle>{t('description')}</TableTitle>,
      dataIndex: 'description',
      key: 'description',
      width: 600,
    },
    {
      title: <TableTitle>{t('category')}</TableTitle>,
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: <TableTitle>{t('price')}</TableTitle>,
      dataIndex: 'price',
      key: 'price',
      render: (price) => (
        <>
          {price}
          ₴
        </>
      ),
    },
    {
      title: <TableTitle>{t('priceWithDiscount')}</TableTitle>,
      dataIndex: 'priceWithDiscount',
      key: 'priceWithDiscount',
      render: (priceWithDiscount) => (
        <>
          {priceWithDiscount}
          ₴
        </>
      ),
    },
    {
      title: <TableTitle>{t('discount')}</TableTitle>,
      dataIndex: 'discount',
      key: 'discount',
      render: (discount) => (
        discount ? (
          <>
            {discount}
            ₴
          </>
        ) : <p style={{ fontWeight: 800, color: 'red' }}>{t('withoutDiscount')}</p>),
    },
    {
      title: <TableTitle>{t('onStockCount')}</TableTitle>,
      dataIndex: 'onStockCount',
      key: 'onStockCount',
      width: 200,
      render: (count) => (count ? <>{count}</> : <p style={{ fontWeight: 800, color: 'red' }}>{t('notOnTheStock')}</p>),
    },
  ];

  return <Table columns={columns} dataSource={goods} />;
};
