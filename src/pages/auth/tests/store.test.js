import { authActions, authReducer } from '../store';


const mockInitialState = {
  isAuth: false,
};

describe('auth reducer', () => {
  it('should setIsAuth action change store', () => {
    const action = {
      type: authActions.setIsAuth.type,
      payload: true,
    };

    const expectedState = {
      isAuth: true,
    };

    const reducer = authReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
