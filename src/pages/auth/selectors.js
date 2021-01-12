import { createSelector } from 'reselect'

const authState = state => state.auth

export const authSelectors = {
  getIsAuth: createSelector(authState, auth => auth.isAuth)
}