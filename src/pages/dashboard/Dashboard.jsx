import React from 'react'
import { useSelector } from 'react-redux'

import { Button, PagePanel, PanelText } from '../../styled'
import { GeneralInfoCards } from './general-info-cards/GeneralInfoCards'
import { profileSelectors } from '../profile/selectors'


export const Dashboard = () => {
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
      <GeneralInfoCards/>
    </>
  )
}