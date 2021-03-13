import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { pagesLinks } from '../consts';
import { appActions } from './store';
import { appSelectors } from './selectors';
import { authSelectors } from '../pages/auth/selectors';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/header/Header';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { AddGoods } from '../pages/add-goods/AddGoods';
import { Loader } from '../components/common/Loader/Loader';
import { Profile } from '../pages/profile/Profile';
import { getLocalStorageLocale } from '../helpers/localStorageHelper';
import { Registration } from '../pages/auth/registration/Registration';
import { Login } from '../pages/auth/login/Login';

import { Wrapper } from '../styled';
import { AppWrapper } from './styled';
import { Users } from '../pages/users/Users';
import { Settings } from '../pages/settings/Settings';


export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuth);
  const isLoading = useSelector(appSelectors.getIsLoading);

  useEffect(() => {
    dispatch(appActions.setInit());
    i18next.changeLanguage(getLocalStorageLocale());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <AppWrapper>
      {
        isAuth
          ? (
            <>
              <Sidebar />
              <Wrapper full>
                <Header />
                <Route exact path={pagesLinks.dashboard} component={Dashboard} />
                <Route path={pagesLinks.addGoods} component={AddGoods} />
                <Route path={pagesLinks.profile} component={Profile} />
                <Route path={pagesLinks.users} component={Users} />
                <Route path={pagesLinks.settings} component={Settings} />
                <Route path="*">
                  <Redirect to={pagesLinks.dashboard} />
                </Route>
              </Wrapper>
            </>
          )
          : (
            <Wrapper style={{ minHeight: '100vh' }} full row>
              <Route path={pagesLinks.registration} component={Registration} />
              <Route path={pagesLinks.login} component={Login} />
              <Route path="*">
                <Redirect to={pagesLinks.login} />
              </Route>
            </Wrapper>
          )
      }
    </AppWrapper>
  );
};
