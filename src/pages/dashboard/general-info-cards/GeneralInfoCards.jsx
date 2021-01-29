import React from 'react'
import { useSelector } from 'react-redux'
import { dashboardSelectors } from '../selectors'
import { ArrowDownOutlined } from '@ant-design/icons'
import { StatisticCard } from '../../../components/common/statistic-card/StatisticCard'

import { Wrapper } from '../../../styled'


export const GeneralInfoCards = () => {
  const users = useSelector(dashboardSelectors.getAllUsers)
  const usersCount = users.length

  const admins = users.filter(user => user.role === 'admin')
  const adminsCount = admins.length

  const regulars = users.filter(user => user.role === 'regular')
  const regularsCount = regulars.length


  return (
    <Wrapper
      row full justify
      style={{
        transform: "translate(0, -50px)",
        paddingLeft: 20,
        paddingRight: 20
      }}
    >
      <StatisticCard
        icon={<ArrowDownOutlined style={{ color: 'red' }}/>}
        iconBackground={'#fcddde'}
        title={'Total users count'}
        count={usersCount}
        percents={"11%"}
        isGrow={true}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#ccf5eb'}
        title={'Total regulars count'}
        count={regularsCount}
        percents={"21%"}
        isGrow={false}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#f2545b'}
        title={'Totals admins count'}
        count={adminsCount}
        percents={"54%"}
        isGrow={true}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#f2545b'}
        title={'CURRENT FISCAL'}
        count={"$199,580"}
        percents={"19%"}
        isGrow={false}
      />
    </Wrapper>
  )
}