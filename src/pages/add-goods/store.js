import { createAction, createSlice } from '@reduxjs/toolkit';

const storeName = 'goods';

const initialState = {
  goods: [],
  categories: [],
  goodsCount: 0,
  categoriesCount: 0,
};

const goodsSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload;
    },
    setGoodsCount(state, action) {
      state.goodsCount = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategoriesCount(state, action) {
      state.categoriesCount = action.payload;
    },
  },
});

export const goodsActions = {
  setGoods: goodsSlice.actions.setGoods,
  setGoodsCount: goodsSlice.actions.setGoodsCount,
  setCategories: goodsSlice.actions.setCategories,
  setCategoriesCount: goodsSlice.actions.setCategoriesCount,
  createGoods: createAction(`${storeName}/createGoods`),
  createCategory: createAction(`${storeName}/createCategory`),
};

export const goodsReducer = goodsSlice.reducer;
