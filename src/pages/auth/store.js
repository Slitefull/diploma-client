import { createAction, createSlice } from '@reduxjs/toolkit';

const storeName = 'auth';

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const authActions = {
  register: createAction(`${storeName}/register`),
  login: createAction(`${storeName}/login`),
  logout: createAction(`${storeName}/logout`),
  setIsAuth: authSlice.actions.setIsAuth,
};

export const authReducer = authSlice.reducer;
