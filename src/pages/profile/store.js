import { createAction, createSlice } from '@reduxjs/toolkit'

const storeName = 'profile'

const initialState = {
  profile: {},
  users: {}
}

const profileSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setUserData(state, action) {
      state.profile = action.payload
    },
    setUserName(state, action) {
      state.profile.name = action.payload
    }
  }
})

export const profileActions = {
  setUsers: profileSlice.actions.setUsers,
  setUserData: profileSlice.actions.setUserData,
  setUserName: profileSlice.actions.setUserName,
  saveProfileSettings: createAction(`${storeName}/saveProfileSettings`),
  makeAdmin: createAction(`${storeName}/makeAdmin`),
  removeAdmin: createAction(`${storeName}/removeAdmin`)
}

export const profileReducer = profileSlice.reducer