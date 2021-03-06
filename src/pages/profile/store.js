import { createAction, createSlice } from '@reduxjs/toolkit';


const storeName = 'profile';

const initialState = {
  profile: {},
};

const profileSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setUserData(state, action) {
      state.profile = action.payload;
    },
  },
});

export const profileActions = {
  setUserData: profileSlice.actions.setUserData,
  saveProfileSettings: createAction(`${storeName}/saveProfileSettings`),
  initProfile: createAction(`${storeName}/initProfile`),
};

export const profileReducer = profileSlice.reducer;
