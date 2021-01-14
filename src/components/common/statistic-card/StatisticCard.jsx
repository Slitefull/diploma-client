import React from 'react'
import { InfoCard, InfoCardCount, InfoCardIcon, InfoCardPercent, InfoCardTitle } from './styled'


export const StatisticCard = ({ title, count, icon, iconBackground, percents, isGrow }) => (
  <InfoCard>
    <InfoCardIcon background={ iconBackground }>{ icon }</InfoCardIcon>
    <InfoCardPercent isGrow={ isGrow }>{ percents }</InfoCardPercent>
    <InfoCardCount>{ count }</InfoCardCount>
    <InfoCardTitle>{ title }</InfoCardTitle>
  </InfoCard>
)