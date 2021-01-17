import { createAction, createSlice } from '@reduxjs/toolkit'

const storeName = 'profile'

const initialState = {
  profile: {}
}

const profileSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setUserData(state, action) {
      state.profile = action.payload
    },
    setUserName(state, action) {
      state.profile.name = action.payload
    }
  }
})

export const profileActions = {
  setUserData: profileSlice.actions.setUserData,
  setUserName: profileSlice.actions.setUserName,
  saveProfileSettings: createAction(`${storeName}/saveProfileSettings`),
}

export const profileReducer = profileSlice.reducer