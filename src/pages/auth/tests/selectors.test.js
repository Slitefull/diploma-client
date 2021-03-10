import { authSelectors } from '../selectors';


const mockInitialState = {
  auth: {
    isAuth: false,
  },
};

describe('auth selectors', () => {
  it('should return boolean getIsAuth selector', () => {
    expect(authSelectors.getIsAuth(mockInitialState)).toEqual(false);
  });
});
