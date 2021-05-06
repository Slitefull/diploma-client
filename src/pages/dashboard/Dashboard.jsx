import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { GoodsTable } from './goods-table/GoodsTable';
import { greeting } from '../../helpers/greeting';
import { profileSelectors } from '../profile/selectors';
import { GeneralInfoCards } from './general-info-cards/GeneralInfoCards';

import { Button, PagePanel, PanelText, Wrapper } from '../../styled';


export const Dashboard = () => {
  const { t } = useTranslation();
  const userName = useSelector(profileSelectors.getName);

  const time = new Date();

  return (
    <>
      <PagePanel>
        {greeting((time.getHours()), userName)}
        <PanelText subtitle>
          {t('dashboardToControlTheGoodsInYourWarehouse')}
        </PanelText>
        <Button>{t('viewReports')}</Button>
      </PagePanel>
      <GeneralInfoCards />
      <Wrapper style={{ padding: '0 20px' }}>
        <GoodsTable />
        {/* <Chart /> */}
      </Wrapper>
    </>
  );
};
