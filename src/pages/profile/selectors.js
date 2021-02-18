import { createSelector } from 'reselect'

const profileState = state => state.profile

const getUserName = createSelector(profileState, state => state.profile.name)
const getUserSurname = createSelector(profileState, state => state.profile.surname)
const getUserUserName = createSelector(profileState, state => state.profile.userName)
const getUserEmail = createSelector(profileState, state => state.profile.email)
const getUserRole = createSelector(profileState, state => state.profile.role)
const getUserAvatar = createSelector(profileState, state => state.profile.avatar)

export const profileSelectors = {
  getUserName,
  getUserSurname,
  getUserUserName,
  getUserEmail,
  getUserAvatar,
  getUserRole
}
