import { authSelectors } from '../selectors';


const mockInitialState = {
  auth: {
    isAuth: false,
  },
};

describe('auth page selectors', () => {
  it('should return boolean getIsAuth selector', () => {
    expect(authSelectors.getIsAuth(mockInitialState)).toEqual(false);
  });
});
