import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoutes } from '../hooks/useRoutes'
import { appActions } from './store'
import { authSelectors } from '../pages/auth/selectors'

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