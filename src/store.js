import { rootSaga } from './root-saga'
import { rootReducer } from './root-reducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), saga];

export const store = configureStore({
  reducer: rootReducer,
  devTools: window.devToolsExtension ? window.devToolsExtension() : f => f,
  middleware
})

saga.run(rootSaga)