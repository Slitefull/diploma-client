import { createSelector } from 'reselect';


const appState = (state) => state.sidebar;

const getIsOpenSidebar = createSelector(appState, (sidebar) => sidebar.isOpenSidebar);
const getCurrentMenuItem = createSelector(appState, (sidebar) => sidebar.currentMenuItem);

export const sidebarSelectors = {
  getIsOpenSidebar,
  getCurrentMenuItem,
};
