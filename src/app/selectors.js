import { createSelector } from 'reselect'

const appState = state => state.app

const getIsLoading = createSelector(appState, app => app.isLoading)

export const appSelectors = { getIsLoading }
