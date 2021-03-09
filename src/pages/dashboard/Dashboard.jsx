import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { GoodsTable } from './goods-table/GoodsTable';
import { greeting } from '../../helpers/greeting';
import { profileSelectors } from '../profile/selectors';
import { GeneralInfoCards } from './general-info-cards/GeneralInfoCards';
import { Chart } from '../../components/common/chart/Chart';

import { Button, PagePanel, PanelText, Wrapper } from '../../styled';


export const Dashboard = () => {
  const { t } = useTranslation();
  const userName = useSelector(profileSelectors.getUserName);
  const time = new Date();

  return (
    <>
      <PagePanel>
        {greeting((time.getHours()), userName)}
        <PanelText subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dolores
          <br />
          doloribus esse et iste laboriosam maiores maxime, mollitia nisi numquam omnis praesentium provident quam quasi
          quia quisquam recusandae vel.
        </PanelText>
        <Button>{t('viewReports')}</Button>
      </PagePanel>
      <GeneralInfoCards />
      <Wrapper style={{ padding: '0 20px' }}>
        <GoodsTable />
        <Chart />
      </Wrapper>
    </>
  );
};
