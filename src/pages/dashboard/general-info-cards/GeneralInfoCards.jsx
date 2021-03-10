import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AiFillShop, AiOutlineShopping, FaMoneyCheckAlt, GiReceiveMoney } from 'react-icons/all';
import { Carousel } from 'antd';
import { goodsSelectors } from '../../add-goods/selectors';
import { StatisticCard } from '../../../components/common/statistic-card/StatisticCard';

import { Wrapper } from '../../../styled';


export const GeneralInfoCards = () => {
  const { t } = useTranslation();
  const differentGoodsCount = useSelector(goodsSelectors.getAllDifferentGoodsCount);
  const allGoodsOnTheStockCount = useSelector(goodsSelectors.getAllGoodsOnTheStockCount);
  const totalDiscount = useSelector(goodsSelectors.getTotalDiscount);
  const totalGoodsPriceWithDiscount = useSelector(goodsSelectors.getTotalGoodsPriceWithDiscount);
  const notOnTheStockGoodsCount = useSelector(goodsSelectors.getNotOnTheStockGoodsCount);
  const totalGoodsWithDiscountCount = useSelector(goodsSelectors.getTotalGoodsWithDiscount);

  return (
    <Carousel
      style={{ transform: 'translate(0, -50px)', width: '100%', margin: 'auto' }}
      dots="carousel-dots__diploma"
      autoplay
    >
      <div>
        <Wrapper row justify style={{ padding: '0 20px' }}>
          <StatisticCard
            icon={<AiOutlineShopping size={20} style={{ color: '#1bb5fe' }} />}
            iconBackground="#d1f0ff"
            title={t('totalDifferentGoods')}
            count={differentGoodsCount}
          />
          <StatisticCard
            icon={<AiFillShop size={20} style={{ color: '#fac646' }} />}
            iconBackground="#fdf2cd"
            title={t('totalGoodsUnitsOnTheStock')}
            count={allGoodsOnTheStockCount}
          />
          <StatisticCard
            icon={<AiFillShop size={20} style={{ color: '#fac646' }} />}
            iconBackground="#fdf2cd"
            title={t('theTotalQuantityOfGoodsThatAreNotOnTheStock')}
            count={notOnTheStockGoodsCount}
          />
          <StatisticCard
            icon={<AiFillShop size={20} style={{ color: '#fac646' }} />}
            iconBackground="#fdf2cd"
            title={t('totalGoodsWithDiscountCount')}
            count={totalGoodsWithDiscountCount}
          />
        </Wrapper>
      </div>
      <div>
        <Wrapper row full justify style={{ padding: '0 20px' }}>
          <StatisticCard
            icon={<GiReceiveMoney size={20} style={{ color: '#00cc9c' }} />}
            iconBackground="#ccf5eb"
            title={t('totalDiscount')}
            count={`${totalDiscount} ₴`}
          />
          <StatisticCard
            icon={<FaMoneyCheckAlt size={20} style={{ color: '#f2545b' }} />}
            iconBackground="#fcddde"
            title={t('totalGoodsPriceWithDiscount')}
            count={`${totalGoodsPriceWithDiscount} ₴`}
          />
        </Wrapper>
      </div>
    </Carousel>
  );
};
