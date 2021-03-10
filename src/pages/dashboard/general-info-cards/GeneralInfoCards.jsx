import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AiOutlineShopping } from 'react-icons/all';
import { StatisticCard } from '../../../components/common/statistic-card/StatisticCard';

import { Wrapper } from '../../../styled';
import { goodsSelectors } from '../../add-goods/selectors';


export const GeneralInfoCards = () => {
  const { t } = useTranslation();
  const goodsCount = useSelector(goodsSelectors.getAllGoodsCount);

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
        title={t('totalGoodsCount')}
        count={goodsCount}
      />
    </Wrapper>
  );
};
