import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appActions } from './store'
import { useRoutes } from '../hooks/useRoutes'
import { authSelectors } from '../pages/auth/selectors'

import { AppWrapper, MainWrapper } from './styled'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Header } from '../components/header/Header'


export const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(authSelectors.getIsAuth)
  const routes = useRoutes(isAuth)

  useEffect(() => { dispatch(appActions.setInit()) }, [dispatch])

  return (
    <AppWrapper>
      <Sidebar/>
      <MainWrapper>
        <Header/>
        {routes}
      </MainWrapper>
    </AppWrapper>
  )
}