import { createSelector } from 'reselect';


const goodsState = (state) => state.goods;

const getCurrentStep = createSelector(goodsState, (state) => state.currentStep);
const getAllGoods = createSelector(goodsState, (state) => state.goods);
const getName = createSelector(goodsState, (state) => state.name);
const getDescription = createSelector(goodsState, (state) => state.description);
const getCategory = createSelector(goodsState, (state) => state.category);
const getPrice = createSelector(goodsState, (state) => state.price);
const getOnStockCount = createSelector(goodsState, (state) => state.onStockCount);
const getDiscount = createSelector(goodsState, (state) => state.discount);
const getThumbnail = createSelector(goodsState, (state) => state.thumbnail);
const getIsPreview = createSelector(goodsState, (state) => state.isPreview);
const getAllDifferentGoodsCount = createSelector(goodsState, (state) => state.goods.length);
const getAllCategories = createSelector(goodsState, (state) => state.categories);
const getAllCategoriesCount = createSelector(goodsState, (state) => state.categories.length);
const getNotOnTheStockGoodsCount = createSelector(goodsState, (state) => {
  const notOnTheStockGoods = state.goods.filter((item) => item.onStockCount === 0);
  return notOnTheStockGoods.length;
});
const getTotalGoodsWithDiscount = createSelector(goodsState, (state) => {
  const totalGoodsWithDiscount = state.goods.filter((item) => item.discount !== 0);
  return totalGoodsWithDiscount.length;
});
const getAllGoodsOnTheStockCount = createSelector(goodsState, (state) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const onStockCount = state.goods.map((item) => item.onStockCount);
  return onStockCount.reduce(reducer);
});
const getTotalDiscount = createSelector(goodsState, (state) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalDiscount = state.goods.map((item) => item.discount * item.onStockCount);
  return totalDiscount.reduce(reducer);
});
const getTotalGoodsPriceWithDiscount = createSelector(goodsState, (state) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const priceWithDiscount = state.goods.map((item) => (item.price - item.discount) * item.onStockCount);
  return priceWithDiscount.reduce(reducer);
});

export const goodsSelectors = {
  getCurrentStep,
  getName,
  getDescription,
  getCategory,
  getPrice,
  getOnStockCount,
  getDiscount,
  getThumbnail,
  getIsPreview,
  getAllGoods,
  getAllDifferentGoodsCount,
  getAllCategories,
  getAllCategoriesCount,
  getAllGoodsOnTheStockCount,
  getTotalDiscount,
  getTotalGoodsPriceWithDiscount,
  getNotOnTheStockGoodsCount,
  getTotalGoodsWithDiscount,
};
