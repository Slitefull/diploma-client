import { createSlice } from '@reduxjs/toolkit';


const storeName = 'app';

const initialState = {
  isLoading: false,
  isInitialized: false,
  locale: '',
  isOverlay: false,
};

export const appSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setInit(state, action) {
      state.isInitialized = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLocale(state, action) {
      state.locale = action.payload;
    },
    setIsOverlay(state, action) {
      state.isOverlay = action.payload;
    },
  },
});

export const appActions = {
  setInit: appSlice.actions.setInit,
  setLoading: appSlice.actions.setLoading,
  setLocale: appSlice.actions.setLocale,
  setIsOverlay: appSlice.actions.setIsOverlay,
};

export const appReducer = appSlice.reducer;
