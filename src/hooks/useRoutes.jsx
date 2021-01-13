import React from 'react'
import { Route } from 'react-router-dom'
import { pagesLinks } from '../consts'
import { Profile } from '../pages/profile/Profile'
import { Registration } from '../pages/auth/registration/Registration'
import { Login } from '../pages/auth/login/Login'


export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Route exact path={'/'} component={Profile}/>
      </>
    )
  }

  return (
    <>
      <Route path={pagesLinks.registration} component={Registration}/>
      <Route path={pagesLinks.login} component={Login}/>
    </>
  )
}
