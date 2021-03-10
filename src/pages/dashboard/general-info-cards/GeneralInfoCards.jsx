import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AiOutlineShopping } from 'react-icons/all';
import { goodsSelectors } from '../../add-goods/selectors';
import { StatisticCard } from '../../../components/common/statistic-card/StatisticCard';

import { Wrapper } from '../../../styled';


export const GeneralInfoCards = () => {
  const { t } = useTranslation();
  const differentGoodsCount = useSelector(goodsSelectors.getAllDifferentGoodsCount);
  const allGoodsOnTheStockCount = useSelector(goodsSelectors.getAllGoodsOnTheStockCount);
  const totalDiscount = useSelector(goodsSelectors.getTotalDiscount);
  const totalGoodsPriceWithDiscount = useSelector(goodsSelectors.getTotalGoodsPriceWithDiscount);

  return (
    <Wrapper
      row
      full
      justify
      style={{
        transform: 'translate(0, -50px)',
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <StatisticCard
        icon={<AiOutlineShopping size={20} style={{ color: '#1bb5fe' }} />}
        iconBackground="#d1f0ff"
        title={t('totalDifferentGoodsCount')}
        count={differentGoodsCount}
      />
      <StatisticCard
        icon={<AiOutlineShopping size={20} style={{ color: '#1bb5fe' }} />}
        iconBackground="#d1f0ff"
        title={t('totalGoodsOnTheStockCount')}
        count={allGoodsOnTheStockCount}
      />
      <StatisticCard
        icon={<AiOutlineShopping size={20} style={{ color: '#1bb5fe' }} />}
        iconBackground="#d1f0ff"
        title={t('totalDiscount')}
        count={`${totalDiscount}₴`}
      />
      <StatisticCard
        icon={<AiOutlineShopping size={20} style={{ color: '#1bb5fe' }} />}
        iconBackground="#d1f0ff"
        title={t('totalDiscount')}
        count={`${totalGoodsPriceWithDiscount}₴`}
      />
    </Wrapper>
  );
};
