import { appSelectors } from '../selectors';


const mockInitialState = {
  app: {
    isInitialized: false,
    isLoading: false,
    locale: 'en',
  },
};

describe('app selectors', () => {
  it('should return boolean getIsLoading selector', () => {
    expect(appSelectors.getIsLoading(mockInitialState)).toEqual(false);
  });

  it('should return string getLocale selector', () => {
    expect(appSelectors.getLocale(mockInitialState)).toEqual('en');
  });
});
