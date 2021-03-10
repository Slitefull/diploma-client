import { createSelector } from 'reselect';


const goodsState = (state) => state.goods;

const getAllGoods = createSelector(goodsState, (state) => state.goods);
const getAllDifferentGoodsCount = createSelector(goodsState, (state) => state.goods.length);
const getAllCategories = createSelector(goodsState, (state) => state.categories);
const getAllCategoriesCount = createSelector(goodsState, (state) => state.categories.length);
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
  getAllGoods,
  getAllDifferentGoodsCount,
  getAllCategories,
  getAllCategoriesCount,
  getAllGoodsOnTheStockCount,
  getTotalDiscount,
  getTotalGoodsPriceWithDiscount,
};
