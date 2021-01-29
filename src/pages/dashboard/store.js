import { createAction, createSlice } from '@reduxjs/toolkit'

const storeName = 'dashboard'

const initialState = {
  users: []
}

const dashboardSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    }
  }
})

export const dashboardActions = {
  setUsers: dashboardSlice.actions.setUsers,
  makeAdmin: createAction(`${storeName}/makeAdmin`),
  removeAdmin: createAction(`${storeName}/removeAdmin`)
}

export const dashboardReducer = dashboardSlice.reducer