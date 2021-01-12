import React from 'react'
import { useSelector } from 'react-redux'
import { authSelectors } from '../../../pages/login/selectors'
import { useRoutesMenu } from '../../../hooks/useRoutesMenu'

import { MenuWrapper } from './styled'


export const Menu = () => {
  const isAuth = useSelector(authSelectors.getIsAuth)
  const menu = useRoutesMenu(isAuth)

  return (
    <MenuWrapper>
      {menu}
    </MenuWrapper>
  )
}