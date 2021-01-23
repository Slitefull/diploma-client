import React from 'react'
import { pagesLinks, pagesTitles } from '../consts'

import { NavLinkItem } from '../components/header/menu/styled'


export const useRoutesMenu = isAuth => {
  if (isAuth) {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <NavLinkItem to={pagesLinks.login}>{pagesTitles.login}</NavLinkItem>
      <NavLinkItem to={pagesLinks.registration}>{pagesTitles.registration}</NavLinkItem>
    </>
  )
}