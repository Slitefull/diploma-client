import { goodsSelectors } from '../selectors';


const mockInitialState = {
  goods: {
    goods: [],
    categories: [],
  },
};

describe('addGoods selectors', () => {
  it('should getAllGoods selector return array', () => {
    expect(goodsSelectors.getAllGoods(mockInitialState)).toEqual([]);
  });

  it('should getAllGoodsCount selector return array', () => {
    expect(goodsSelectors.getAllGoodsCount(mockInitialState)).toEqual(0);
  });

  it('should getAllCategories selector return array', () => {
    expect(goodsSelectors.getAllCategories(mockInitialState)).toEqual([]);
  });

  it('should getAllCategoriesCount selector return array', () => {
    expect(goodsSelectors.getAllCategoriesCount(mockInitialState)).toEqual(0);
  });
});
