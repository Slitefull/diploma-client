import { createSelector } from 'reselect';

const goodsState = (state) => state.goods;

const getAllGoods = createSelector(goodsState, (goods) => goods.goods);
const getGoodsCount = createSelector(goodsState, (goods) => goods.goodsCount);
const getAllCategories = createSelector(goodsState, (goods) => goods.categories);
const getCategoriesCount = createSelector(goodsState, (goods) => goods.categoriesCount);

export const goodsSelectors = { getAllGoods, getGoodsCount, getAllCategories, getCategoriesCount };
