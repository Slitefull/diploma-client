import { goodsSelectors } from '../selectors';


const mockInitialState = {
  goods: {
    goods: [
      {
        name: 'Playstation 5',
        price: 1000,
        discount: 100,
        priceWithDiscount: 900,
        category: 'Gaming consoles',
        onStockCount: 5,
      },
      {
        name: 'lenovo ideapad 5',
        price: 2000,
        discount: 200,
        priceWithDiscount: 1800,
        category: 'Laptops',
        onStockCount: 10,
      },
      {
        name: 'Playstation 4 pro',
        price: 3000,
        discount: 0,
        priceWithDiscount: 3000,
        category: 'Gaming consoles',
        onStockCount: 0,
      },
    ],
    categories: [
      {
        name: 'Gaming consoles',
      },
      {
        name: 'Laptops',
      },
    ],
  },
};

describe('addGoods page selectors', () => {
  it('should getAllGoods selector return array', () => {
    expect(goodsSelectors.getAllGoods(mockInitialState)).toEqual([
      {
        name: 'Playstation 5',
        price: 1000,
        discount: 100,
        priceWithDiscount: 900,
        category: 'Gaming consoles',
        onStockCount: 5,
      },
      {
        name: 'lenovo ideapad 5',
        price: 2000,
        discount: 200,
        priceWithDiscount: 1800,
        category: 'Laptops',
        onStockCount: 10,
      },
      {
        name: 'Playstation 4 pro',
        price: 3000,
        discount: 0,
        priceWithDiscount: 3000,
        category: 'Gaming consoles',
        onStockCount: 0,
      },
    ]);
  });

  it('should getAllDifferentGoodsCount selector return array', () => {
    expect(goodsSelectors.getAllDifferentGoodsCount(mockInitialState)).toEqual(3);
  });

  it('should getAllCategories selector return array', () => {
    expect(goodsSelectors.getAllCategories(mockInitialState)).toEqual([
      {
        name: 'Gaming consoles',
      },
      {
        name: 'Laptops',
      },
    ]);
  });

  it('should getAllCategoriesCount selector return number', () => {
    expect(goodsSelectors.getAllCategoriesCount(mockInitialState)).toEqual(2);
  });

  it('should getNotOnTheStockGoodsCount selector return number', () => {
    expect(goodsSelectors.getNotOnTheStockGoodsCount(mockInitialState)).toEqual(1);
  });

  it('should getTotalGoodsWithDiscount selector return number', () => {
    expect(goodsSelectors.getTotalGoodsWithDiscount(mockInitialState)).toEqual(2);
  });

  it('should getAllGoodsOnTheStockCount selector return number', () => {
    expect(goodsSelectors.getAllGoodsOnTheStockCount(mockInitialState)).toEqual(15);
  });

  it('should getTotalDiscount selector return number', () => {
    expect(goodsSelectors.getTotalDiscount(mockInitialState)).toEqual(2500);
  });

  it('should getTotalGoodsPriceWithDiscount selector return number', () => {
    expect(goodsSelectors.getTotalGoodsPriceWithDiscount(mockInitialState)).toEqual(22500);
  });
});
