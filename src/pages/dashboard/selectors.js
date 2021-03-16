import { createSelector } from 'reselect';
import { userRoles } from '../../helpers/getRole';


const dashboardState = (state) => state.dashboard;
const filterUsersByRole = (state, role) => state.users.filter((user) => user.role === role);

const getAllUsers = createSelector(dashboardState, (state) => state.users);
const getAllUsersCount = createSelector(dashboardState, (state) => state.users.length);

const getAllSuperAdmins = createSelector(dashboardState, (state) => filterUsersByRole(state, userRoles.superAdmin));
const getAllAdmins = createSelector(dashboardState, (state) => filterUsersByRole(state, userRoles.admin));
const getAllRegulars = createSelector(dashboardState, (state) => filterUsersByRole(state, userRoles.regular));

const getAllSuperAdminsCount = createSelector(dashboardState, (state) => {
  const users = filterUsersByRole(state, userRoles.superAdmin);
  return users.length;
});

const getAllAdminsCount = createSelector(dashboardState, (state) => {
  const users = filterUsersByRole(state, userRoles.admin);
  return users.length;
});

const getAllRegularsCount = createSelector(dashboardState, (state) => {
  const users = filterUsersByRole(state, userRoles.regular);
  return users.length;
});

export const dashboardSelectors = {
  getAllUsers,
  getAllUsersCount,
  getAllSuperAdmins,
  getAllAdmins,
  getAllRegulars,
  getAllSuperAdminsCount,
  getAllAdminsCount,
  getAllRegularsCount,
};
