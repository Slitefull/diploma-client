import { goodsSelectors } from '../selectors';


const mockInitialState = {
  goods: {
    goods: [],
    categories: [],
    goodsCount: 0,
    categoriesCount: 0,
  },
};

describe('addGoods selectors', () => {
  it('should getAllGoods selector return array', () => {
    expect(goodsSelectors.getAllGoods(mockInitialState)).toEqual([]);
  });

  it('should getGoodsCount selector return number', () => {
    expect(goodsSelectors.getGoodsCount(mockInitialState)).toEqual(0);
  });

  it('should getAllCategories selector return array', () => {
    expect(goodsSelectors.getAllCategories(mockInitialState)).toEqual([]);
  });

  it('should getCategoriesCount selector return number', () => {
    expect(goodsSelectors.getCategoriesCount(mockInitialState)).toEqual(0);
  });
});
