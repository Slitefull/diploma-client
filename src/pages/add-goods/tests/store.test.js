import { goodsActions, goodsReducer } from '../store';


const mockInitialState = {
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

describe('addGoods reducer', () => {
  it('should setCurrentStep action change state', () => {
    const action = {
      type: goodsActions.setCurrentStep.type,
      payload: 1,
    };

    const expectedState = { ...mockInitialState, currentStep: 1 };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setName action change state', () => {
    const action = {
      type: goodsActions.setName.type,
      payload: 'Test name',
    };

    const expectedState = { ...mockInitialState, name: 'Test name' };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setDescription action change state', () => {
    const action = {
      type: goodsActions.setDescription.type,
      payload: 'Test description',
    };

    const expectedState = { ...mockInitialState, description: 'Test description' };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setCategory action change state', () => {
    const action = {
      type: goodsActions.setCategory.type,
      payload: 'Test category',
    };

    const expectedState = { ...mockInitialState, category: 'Test category' };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setPrice action change state', () => {
    const action = {
      type: goodsActions.setPrice.type,
      payload: 100,
    };

    const expectedState = { ...mockInitialState, price: 100 };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setOnStockCount action change state', () => {
    const action = {
      type: goodsActions.setOnStockCount.type,
      payload: 100,
    };

    const expectedState = { ...mockInitialState, onStockCount: 100 };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setDiscount action change state', () => {
    const action = {
      type: goodsActions.setDiscount.type,
      payload: 100,
    };

    const expectedState = { ...mockInitialState, discount: 100 };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setThumbnail action change state', () => {
    const action = {
      type: goodsActions.setThumbnail.type,
      payload: 'https://testurl.com',
    };

    const expectedState = { ...mockInitialState, thumbnail: 'https://testurl.com' };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setIsPreview action change state', () => {
    const action = {
      type: goodsActions.setIsPreview.type,
      payload: true,
    };

    const expectedState = { ...mockInitialState, isPreview: true };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

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

    const expectedState = { ...mockInitialState,
      goods: [
        {
          _id: '6046b20d07e8bc0f74c6410b',
          name: 'Playstation 5',
        },
      ] };

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

    const expectedState = { ...mockInitialState,
      categories: [
        {
          _id: '602d75d0595fe101e4f97022',
          name: 'Laptops',
        },
      ] };

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should resetFields action change state', () => {
    const action = {
      type: goodsActions.resetFields.type,
      payload: {},
    };

    const expectedState = {
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

    const reducer = goodsReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
