import { createSelector } from 'reselect';


const dashboardState = (state) => state.dashboard;

const getAllUsers = createSelector(dashboardState, (state) => state.users);
const getAllUsersCount = createSelector(dashboardState, (state) => state.users.length);
// eslint-disable-next-line max-len
const getUsersByRole = (role) => createSelector(dashboardState, (state) => state.users.filter((user) => user.role === role));
const getCountByRole = (role) => createSelector(dashboardState, (state) => {
  const users = state.users.filter((user) => user.role === role);
  return users.length;
});

export const dashboardSelectors = {
  getAllUsers,
  getAllUsersCount,
  getUsersByRole,
  getCountByRole,
};
