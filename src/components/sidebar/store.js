import { createSlice } from '@reduxjs/toolkit';


const storeName = 'sidebar';

const initialState = {
  isOpenSidebar: false,
  currentMenuItem: '',
};

export const sidebarSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setIsOpenSidebar(state, action) {
      state.isOpenSidebar = action.payload;
    },
    setCurrentMenuItem(state, action) {
      state.currentMenuItem = action.payload;
    },
  },
});

export const sidebarActions = {
  setIsOpenSidebar: sidebarSlice.actions.setIsOpenSidebar,
  setCurrentMenuItem: sidebarSlice.actions.setCurrentMenuItem,
};

export const sidebarReducer = sidebarSlice.reducer;
