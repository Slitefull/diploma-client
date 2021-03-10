import { createSelector } from 'reselect';


const goodsState = (state) => state.goods;

const getAllGoods = createSelector(goodsState, (state) => state.goods);
const getAllGoodsCount = createSelector(goodsState, (state) => state.goods.length);
const getAllCategories = createSelector(goodsState, (state) => state.categories);
const getAllCategoriesCount = createSelector(goodsState, (state) => state.categories.length);

export const goodsSelectors = {
  getAllGoods,
  getAllGoodsCount,
  getAllCategories,
  getAllCategoriesCount,
};
