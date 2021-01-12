import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app/store'
import { profileReducer } from './pages/profile/store'
import { authReducer } from './pages/auth/store'


export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  form: formReducer,
})