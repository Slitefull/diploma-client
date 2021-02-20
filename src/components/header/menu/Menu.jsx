import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutesMenu } from '../../../hooks/useRoutesMenu';
import { authSelectors } from '../../../pages/auth/selectors';

import { Wrapper } from '../../../styled';


export const Menu = () => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const menu = useRoutesMenu(isAuth);

  return (
    <Wrapper row>
      {menu}
    </Wrapper>
  );
};
