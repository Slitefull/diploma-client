import { createAction, createSlice } from '@reduxjs/toolkit';


const storeName = 'goods';

const initialState = {
  goods: [],
  categories: [],
};

const goodsSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const goodsActions = {
  setGoods: goodsSlice.actions.setGoods,
  setCategories: goodsSlice.actions.setCategories,
  createGoods: createAction(`${storeName}/createGoods`),
  createCategory: createAction(`${storeName}/createCategory`),
};

export const goodsReducer = goodsSlice.reducer;
