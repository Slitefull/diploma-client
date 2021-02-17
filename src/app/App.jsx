import React, { useEffect } from 'react'
import i18next from 'i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useRoutes } from '../hooks/useRoutes'
import { appActions } from './store'
import { authSelectors } from '../pages/auth/selectors'
import { getLocalStorageLocale } from '../helpers/localStorageHelper'

import { AppWrapper } from './styled'


export const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(authSelectors.getIsAuth)
  const routes = useRoutes(isAuth)

  useEffect(() => {
    dispatch(appActions.setInit())
    i18next.changeLanguage(getLocalStorageLocale())
  }, [dispatch])

  return (
    <AppWrapper>
      {routes}
    </AppWrapper>
  )
}
