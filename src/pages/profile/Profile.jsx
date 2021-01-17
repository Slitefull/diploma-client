import React from 'react'
import { useSelector } from 'react-redux'
import { profileSelectors } from './selectors'
import { ArrowDownOutlined } from '@ant-design/icons'
import { StatisticCard } from '../../components/common/statistic-card/StatisticCard'

import { Button, PagePanel, PanelText, Wrapper } from '../../styled'


export const Profile = () => {
  const userName = useSelector(profileSelectors.getUserName)

  return (
    <>
      <PagePanel>
        <PanelText>Good Morning, {userName}!</PanelText>
        <PanelText subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dolores <br/>
          doloribus esse et iste laboriosam maiores maxime, mollitia nisi numquam omnis praesentium provident quam quasi
          quia quisquam recusandae vel.
        </PanelText>
        <Button>View reports</Button>
      </PagePanel>
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
    </>
  )
}