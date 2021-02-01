import { createAction, createSlice } from '@reduxjs/toolkit'


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
  setGoods: goodsSlice.actions.setGoods,
  createGoods: createAction(`${storeName}/createGoods`)
}

export const goodsReducer = goodsSlice.reducer
