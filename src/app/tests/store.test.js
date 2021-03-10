import { appActions, appReducer } from '../store';


const mockInitialState = {
  isInitialized: false,
  isLoading: false,
  locale: '',
};

describe('app reducer', () => {
  it('should setInit action change store', () => {
    const action = {
      type: appActions.setInit.type,
      payload: true,
    };

    const expectedState = {
      isInitialized: true,
      isLoading: false,
      locale: '',
    };

    const reducer = appReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setLoading action change store', () => {
    const action = {
      type: appActions.setLoading.type,
      payload: true,
    };

    const expectedState = {
      isInitialized: false,
      isLoading: true,
      locale: '',
    };

    const reducer = appReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setLocale action change store', () => {
    const action = {
      type: appActions.setLocale.type,
      payload: 'en',
    };

    const expectedState = {
      isInitialized: false,
      isLoading: false,
      locale: 'en',
    };

    const reducer = appReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
