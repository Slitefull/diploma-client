import React from 'react';
import i18next from 'i18next';

import { PanelText } from '../styled';


export const greeting = (time, userName) => {
  if (time >= 7 && time < 12) {
    return (
      <PanelText>
        {i18next.t('goodMorning')}
        ,
        {' '}
        {userName}
        !
      </PanelText>
    );
  }
  if (time >= 12 && time < 17) {
    return (
      <PanelText>
        {i18next.t('goodAfternoon')}
        ,
        {' '}
        {userName}
        !
      </PanelText>
    );
  }
  if (time >= 17 && time < 22) {
    return (
      <PanelText>
        {i18next.t('goodEvening')}
        ,
        {' '}
        {userName}
        !
      </PanelText>
    );
  }
  return (
    <PanelText>
      {i18next.t('goodNight')}
      ,
      {' '}
      {userName}
      !
    </PanelText>
  );
};
