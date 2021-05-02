import { createAction, createSlice } from '@reduxjs/toolkit';


const storeName = 'goods';

const initialState = {
  currentStep: 0,
  name: '',
  description: '',
  category: '',
  thumbnail: '',
  price: null,
  onStockCount: null,
  discount: null,
  isPreview: false,
  goods: [],
  categories: [],
};

const goodsSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setOnStockCount(state, action) {
      state.onStockCount = action.payload;
    },
    setDiscount(state, action) {
      state.discount = action.payload;
    },
    setThumbnail(state, action) {
      state.thumbnail = action.payload;
    },
    setIsPreview(state, action) {
      state.isPreview = action.payload;
    },
    setGoods(state, action) {
      state.goods = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    resetFields(state) {
      state.currentStep = 0;
      state.name = '';
      state.description = '';
      state.category = '';
      state.thumbnail = '';
      state.price = null;
      state.onStockCount = null;
      state.discount = null;
      state.isPreview = false;
    },
  },
});

export const goodsActions = {
  setCurrentStep: goodsSlice.actions.setCurrentStep,
  setName: goodsSlice.actions.setName,
  setDescription: goodsSlice.actions.setDescription,
  setCategory: goodsSlice.actions.setCategory,
  setPrice: goodsSlice.actions.setPrice,
  setOnStockCount: goodsSlice.actions.setOnStockCount,
  setDiscount: goodsSlice.actions.setDiscount,
  setThumbnail: goodsSlice.actions.setThumbnail,
  setIsPreview: goodsSlice.actions.setIsPreview,
  setGoods: goodsSlice.actions.setGoods,
  setCategories: goodsSlice.actions.setCategories,
  resetFields: goodsSlice.actions.resetFields,
  createGoods: createAction(`${storeName}/createGoods`),
  createCategory: createAction(`${storeName}/createCategory`),
};

export const goodsReducer = goodsSlice.reducer;
