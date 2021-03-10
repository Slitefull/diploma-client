import { createSelector } from 'reselect';


const authState = (state) => state.auth;

const getIsAuth = createSelector(authState, (auth) => auth.isAuth);

export const authSelectors = { getIsAuth };
