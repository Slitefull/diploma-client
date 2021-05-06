import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { pagesLinks } from '../consts';
import { appActions } from './store';
import { appSelectors } from './selectors';
import { authSelectors } from '../pages/auth/selectors';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { AddGoods } from '../pages/add-goods/AddGoods';
import { Loader } from '../components/common/Loader/Loader';
import { Profile } from '../pages/profile/Profile';
import { getLocalStorageLocale } from '../helpers/localStorageHelper';
import { Registration } from '../pages/auth/registration/Registration';
import { Users } from '../pages/users/Users';
import { Todo } from '../pages/todo/Todo';
import { Login } from '../pages/auth/login/Login';
import { Settings } from '../pages/settings/Settings';

import { GlobalStyle, Wrapper } from '../styled';
import { AppWrapper, Overlay } from './styled';


export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuth);
  const isLoading = useSelector(appSelectors.getIsLoading);
  const isOverlay = useSelector(appSelectors.getIsOverlay);

  useEffect(() => {
    dispatch(appActions.setInit());
    i18next.changeLanguage(getLocalStorageLocale());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <>
      <GlobalStyle />
      <Overlay isOverlay={isOverlay} />
      <AppWrapper>
        {isAuth
          ? (
            <>
              <Sidebar />
              <Wrapper full style={{ zIndex: 999999 }}>
                <Switch>
                  <Route exact path={pagesLinks.dashboard} component={Dashboard} />
                  <Route path={pagesLinks.addGoods} component={AddGoods} />
                  <Route path={pagesLinks.profile} component={Profile} />
                  <Route path={pagesLinks.users} component={Users} />
                  <Route path={pagesLinks.todo} component={Todo} />
                  <Route path={pagesLinks.settings} component={Settings} />
                  <Route path="*">
                    <Redirect to={pagesLinks.dashboard} />
                  </Route>
                </Switch>
              </Wrapper>
            </>
          )
          : (
            <Wrapper style={{ minHeight: '100vh', zIndex: 99999 }} full row>
              <Route path={pagesLinks.registration} component={Registration} />
              <Route path={pagesLinks.login} component={Login} />
            </Wrapper>
          )}
      </AppWrapper>
    </>
  );
};
