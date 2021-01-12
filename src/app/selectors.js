import { createSelector } from 'reselect'


const appState = state => state.app

export const appSelectors = {
  getIsLoading: createSelector(appState, app => app.isLoading)
}