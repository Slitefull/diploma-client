import { createSelector } from 'reselect'

const dashboardState = state => state.dashboard

const getAllUsers = createSelector(dashboardState, dashboard => dashboard.users.users)
const getUsersCount = createSelector(dashboardState, dashboard => dashboard.users.usersCount)
const getAdminsCount = createSelector(dashboardState, dashboard => dashboard.users.adminsCount)

export const dashboardSelectors = { getAllUsers, getUsersCount, getAdminsCount }
