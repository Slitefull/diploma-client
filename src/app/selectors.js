import { createSelector } from 'reselect';


const appState = (state) => state.app;

const getIsLoading = createSelector(appState, (app) => app.isLoading);
const getLocale = createSelector(appState, (app) => app.locale);
const getIsOverlay = createSelector(appState, (app) => app.isOverlay);

export const appSelectors = {
  getIsLoading,
  getLocale,
  getIsOverlay,
};
