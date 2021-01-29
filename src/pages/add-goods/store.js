import { createSlice } from '@reduxjs/toolkit'

const storeName = 'goods'

const initialState = {
  goods: []
}

const goodsSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload
    }
  }
})

export const goodsActions = {
  setGoods: goodsSlice.actions.setGoods
}

export const goodsReducer = goodsSlice.reducer
