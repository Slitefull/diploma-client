import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../../app/store';
import { LogoutModal } from './LogoutModal/LogoutModal';
import { authActions } from '../../../pages/auth/store';
import { authSelectors } from '../../../pages/auth/selectors';

import { Wrapper } from '../../../styled';
import { LogoutButtonIcon, LogoutButtonText, LogoutButtonWrapper } from './styled';


export const LogoutButton = ({ icon, title, isFull, isActive }) => {
  const dispatch = useDispatch();
  const isOpenLogoutModal = useSelector(authSelectors.getIsOpenLogoutModal);

  const onOpenLogoutModalHandler = useCallback(() => {
    dispatch(authActions.setIsOpenLogoutModal(true));
    dispatch(appActions.setIsOverlay(true));
  }, []);

  return (
    <>
      <LogoutButtonWrapper
        onClick={onOpenLogoutModalHandler}
        isActive={isActive}
        isFull={isFull}
      >
        <Wrapper row>
          <LogoutButtonIcon isFull={isFull} src={icon} />
          {isFull && (
            <LogoutButtonText>
              {title}
            </LogoutButtonText>
          )}
        </Wrapper>
      </LogoutButtonWrapper>
      {isOpenLogoutModal && <LogoutModal />}
    </>
  );
};
