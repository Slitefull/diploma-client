import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appActions } from './store'
import { authSelectors } from '../pages/login/selectors'
import { useRoutes } from '../hooks/useRoutes'

import { AppWrapper } from './styled'


export const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(authSelectors.getIsAuth)
  const routes = useRoutes(isAuth)

  useEffect(() => { dispatch(appActions.setInit()) }, [dispatch])

  return (
    <AppWrapper>
      {routes}
    </AppWrapper>
  )
}