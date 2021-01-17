import React from 'react'
import { ArrowDownOutlined } from '@ant-design/icons'
import { StatisticCard } from '../../../components/common/statistic-card/StatisticCard'

import { Wrapper } from '../../../styled'


export const GeneralInfoCards = () => {
  return (
    <Wrapper row full justify
      style={{
        transform: "translate(0, -50px)",
        paddingLeft: 20,
        paddingRight: 20
      }}
    >
      <StatisticCard
        icon={<ArrowDownOutlined style={{color: 'red'}}/>}
        iconBackground={'#fcddde'}
        title={'CURRENT FISCAL'}
        count={"$199,580"}
        percents={"19%"}
        isGrow={false}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#ccf5eb'}
        title={'CURRENT FISCAL'}
        count={"$199,580"}
        percents={"19%"}
        isGrow={false}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#f2545b'}
        title={'CURRENT FISCAL'}
        count={"$199,580"}
        percents={"19%"}
        isGrow={false}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#ccf5eb'}
        title={'CURRENT FISCAL'}
        count={"$199,580"}
        percents={"19%"}
        isGrow={false}
      />
      <StatisticCard
        icon={'test'}
        iconBackground={'#f2545b'}
        title={'CURRENT FISCAL'}
        count={"$199,580"}
        percents={"19%"}
        isGrow={false}
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