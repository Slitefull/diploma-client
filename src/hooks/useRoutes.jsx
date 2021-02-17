import React from 'react'
import { Route } from 'react-router-dom'
import { pagesLinks } from '../consts'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Registration } from '../pages/auth/registration/Registration'
import { Login } from '../pages/auth/login/Login'
import { Header } from '../components/header/Header'
import { Sidebar } from '../components/sidebar/Sidebar'

import { Wrapper } from '../styled'
import { AddGoods } from '../pages/add-goods/AddGoods'
import { Profile } from '../pages/profile/Profile'


export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Sidebar/>
        <Wrapper full>
          <Header/>
          <Route exact path={'/'} component={Dashboard}/>
          <Route path={pagesLinks.addGoods} component={AddGoods}/>
          <Route path={pagesLinks.profile} component={Profile}/>
        </Wrapper>
      </>
    )
  }

  return (
    <>
      <Wrapper row full>
        <Route path={pagesLinks.registration} component={Registration}/>
        <Route path={pagesLinks.login} component={Login}/>
      </Wrapper>
    </>
  )
}
