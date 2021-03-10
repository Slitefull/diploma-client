import { goodsActions, goodsReducer } from '../store';


const mockInitialState = {
  goods: [],
  categories: [],
};

describe('addGoods reducer', () => {
  it('should setGoods action change state', () => {
    const action = {
      type: goodsActions.setGoods.type,
      payload: [
        {
          _id: '6046b20d07e8bc0f74c6410b',
          name: 'Playstation 5',
        },
      ],
    };

    const expectedState = {
      goods: [
        {
          _id: '6046b20d07e8bc0f74c6410b',
          name: 'Playstation 5',
        },
      ],
      categories: [],
    };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setCategories action change state', () => {
    const action = {
      type: goodsActions.setCategories.type,
      payload: [
        {
          _id: '602d75d0595fe101e4f97022',
          name: 'Laptops',
        },
      ],
    };

    const expectedState = {
      goods: [],
      categories: [
        {
          _id: '602d75d0595fe101e4f97022',
          name: 'Laptops',
        },
      ],
    };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
