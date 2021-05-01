import { createSelector } from 'reselect';


const appState = (state) => state.app;

const getIsLoading = createSelector(appState, (app) => app.isLoading);
const getLocale = createSelector(appState, (app) => app.locale);
const getIsOpenSidebar = createSelector(appState, (app) => app.isOpenSidebar);

export const appSelectors = {
  getIsLoading,
  getLocale,
  getIsOpenSidebar,
};
