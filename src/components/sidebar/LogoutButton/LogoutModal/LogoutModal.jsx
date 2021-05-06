import React, { useCallback } from 'react';
import { BiErrorCircle } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from './Button/Button';
import { appActions } from '../../../../app/store';
import { authActions } from '../../../../pages/auth/store';

import { Wrapper } from '../../../../styled';
import { LogoutModalWrapper, Text } from './styled';


export const LogoutModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onCancelHandler = useCallback(() => {
    dispatch(authActions.setIsOpenLogoutModal(false));
    dispatch(appActions.setIsOverlay(false));
  }, []);

  const onExitHandler = useCallback(() => {
    dispatch(authActions.logout());
    dispatch(appActions.setIsOverlay(false));
    dispatch(authActions.setIsOpenLogoutModal(false));
  }, []);

  return (
    <LogoutModalWrapper>
      <Wrapper row center>
        <BiErrorCircle
          size={20}
          color="#4285F4"
        />
        <Text>{t('doYouReallyWantToExit')}</Text>
      </Wrapper>
      <Wrapper row style={{ justifyContent: 'flex-end', marginTop: 10 }}>
        <Button
          text={t('cancel')}
          onClickHandler={onCancelHandler}
        />
        <Button
          text={t('exit')}
          onClickHandler={onExitHandler}
          confirm
        />
      </Wrapper>
    </LogoutModalWrapper>
  );
};
