import { createSelector } from 'reselect'

const profileState = state => state.profile

export const profileSelectors = {
  getUserName: createSelector(profileState, state => state.profile.name),
  getUserEmail: createSelector(profileState, state => state.profile.email),
  getUserAvatar: createSelector(profileState, state => state.profile.avatar),
  getUserRole: createSelector(profileState, state => state.profile.role),
  getAllUsers: createSelector(profileState, state => state.users.users),
  getUsersCount: createSelector(profileState, state => state.users.usersCount),
  getAdminsCount: createSelector(profileState, state => state.users.adminsCount),
}
