import { createAction, createSlice } from '@reduxjs/toolkit';


const storeName = 'auth';

const initialState = {
  isAuth: false,
  isOpenLogoutModal: false,
};

const authSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setIsOpenLogoutModal(state, action) {
      state.isOpenLogoutModal = action.payload;
    },
  },
});

export const authActions = {
  setIsAuth: authSlice.actions.setIsAuth,
  setIsOpenLogoutModal: authSlice.actions.setIsOpenLogoutModal,
  register: createAction(`${storeName}/register`),
  login: createAction(`${storeName}/login`),
  logout: createAction(`${storeName}/logout`),
};

export const authReducer = authSlice.reducer;
