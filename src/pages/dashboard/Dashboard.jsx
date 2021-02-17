import React from 'react'
import { useSelector } from 'react-redux'
import { greeting } from '../../helpers/greeting'
import { profileSelectors } from '../profile/selectors'

import { GeneralInfoCards } from './general-info-cards/GeneralInfoCards'
import { Chart } from '../../components/common/chart/Chart'

import { Button, PagePanel, PanelText } from '../../styled'
import { useTranslation } from 'react-i18next'


export const Dashboard = () => {
  const { t } = useTranslation()
  const userName = useSelector(profileSelectors.getUserName)
  const time = new Date()

  return (
    <>
      <PagePanel>
        {greeting((time.getHours()), userName)}
        <PanelText subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dolores <br/>
          doloribus esse et iste laboriosam maiores maxime, mollitia nisi numquam omnis praesentium provident quam quasi
          quia quisquam recusandae vel.
        </PanelText>
        <Button>{t("viewReports")}</Button>
      </PagePanel>
      <GeneralInfoCards/>
      <Chart/>
    </>
  )
}
