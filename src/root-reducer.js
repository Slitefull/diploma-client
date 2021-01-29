import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app/store'
import { authReducer } from './pages/auth/store'
import { dashboardReducer } from './pages/dashboard/store'
import { profileReducer } from './pages/profile/store'
import { goodsReducer } from './pages/add-goods/store'


export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  dashboard: dashboardReducer,
  goods: goodsReducer,
  form: formReducer
})