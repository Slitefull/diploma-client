import React from 'react'
import { useSelector } from 'react-redux'
import { useRoutesMenu } from '../../../hooks/useRoutesMenu'

import { MenuWrapper } from './styled'
import { authSelectors } from '../../../pages/auth/selectors'


export const Menu = () => {
  const isAuth = useSelector(authSelectors.getIsAuth)
  const menu = useRoutesMenu(isAuth)

  return (
    <MenuWrapper>
      {menu}
    </MenuWrapper>
  )
}