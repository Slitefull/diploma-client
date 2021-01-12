import React from 'react'
import { useDispatch } from 'react-redux'
import { pagesLinks, pagesTitles } from '../../../../consts'
import { authActions } from '../../../../pages/login/store'
import { Menu } from 'antd'

import { NavLinkItem } from '../../menu/styled'


export const DropdownMenu = () => {
  const dispatch = useDispatch()

  return (
    <Menu>
      <Menu.Item>
        <NavLinkItem to={pagesLinks.settings}>{pagesTitles.settings}</NavLinkItem>
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(authActions.logout())}>
        Logout
      </Menu.Item>
    </Menu>
  )
}