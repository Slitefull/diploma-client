import { createSelector } from 'reselect';


const authState = (state) => state.auth;

const getIsAuth = createSelector(authState, (auth) => auth.isAuth);
const getIsOpenLogoutModal = createSelector(authState, (auth) => auth.isOpenLogoutModal);

export const authSelectors = {
  getIsAuth,
  getIsOpenLogoutModal,
};
