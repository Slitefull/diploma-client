import React from 'react'
import { Route } from 'react-router-dom'
import { pagesLinks } from '../consts'
import { Profile } from '../pages/profile/Profile'
import { Registration } from '../pages/auth/registration/Registration'
import { Login } from '../pages/auth/login/Login'
import { Header } from '../components/header/Header'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Wrapper } from '../styled'


export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Sidebar/>
        <Wrapper>
          <Header/>
          <Route exact path={'/'} component={Profile}/>
        </Wrapper>
      </>
    )
  }

  return (
    <Wrapper row>
      <Route path={pagesLinks.registration} component={Registration}/>
      <Route path={pagesLinks.login} component={Login}/>
    </Wrapper>
  )
}
