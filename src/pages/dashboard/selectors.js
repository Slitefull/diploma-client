import { createSelector } from 'reselect';


const dashboardState = (state) => state.dashboard;

const getAllUsers = createSelector(dashboardState, (dashboard) => dashboard.users);

export const dashboardSelectors = { getAllUsers };
