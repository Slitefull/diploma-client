import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './app/store';
import { sidebarReducer } from './components/sidebar/store';
import { authReducer } from './pages/auth/store';
import { dashboardReducer } from './pages/dashboard/store';
import { profileReducer } from './pages/profile/store';
import { goodsReducer } from './pages/add-goods/store';
import { todoReducer } from './pages/todo/store';


export const rootReducer = combineReducers({
  app: appReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  profile: profileReducer,
  dashboard: dashboardReducer,
  goods: goodsReducer,
  todo: todoReducer,
  form: formReducer,
});
