import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app/store'
import { authReducer } from './pages/auth/store'
import { dashboardReducer } from './pages/dashboard/store'
import { profileReducer } from './pages/profile/store'


export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  dashboard: dashboardReducer,
  form: formReducer
})