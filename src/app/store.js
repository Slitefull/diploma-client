import { createSlice } from '@reduxjs/toolkit'

const storeName = 'app'

const initialState = {
  isInitialized: false,
  isLoading: false
}

export const appSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setInit(state, action) {
      state.isInitialized = action.payload
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    }
  }
})

export const appActions = {
  setInit: appSlice.actions.setInit,
  setLoading: appSlice.actions.setLoading
}

export const appReducer = appSlice.reducer