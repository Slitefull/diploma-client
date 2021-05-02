import React from 'react';
import { LogoutButtonIcon, LogoutButtonText, LogoutButtonWrapper } from './styled';
import { Wrapper } from '../../../styled';


export const LogoutButton = ({ icon, title, isFull, isActive }) => (
  <>
    <LogoutButtonWrapper
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
  </>
);
