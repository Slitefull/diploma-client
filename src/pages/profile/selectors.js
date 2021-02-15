import { createSelector } from 'reselect'

const profileState = state => state.profile

const getUserName = createSelector(profileState, state => state.profile.name)
const getUserEmail = createSelector(profileState, state => state.profile.email)
const getUserAvatar = createSelector(profileState, state => state.profile.avatar)
const getUserRole = createSelector(profileState, state => state.profile.role)

export const profileSelectors = { getUserName, getUserEmail, getUserAvatar, getUserRole }
