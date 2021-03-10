import { dashboardSelectors } from '../selectors';


const mockInitialState = {
  dashboard: {
    users: [],
  },
};

describe('dashboard selectors', () => {
  it('should return array getAllUsers selector', () => {
    expect(dashboardSelectors.getAllUsers(mockInitialState)).toEqual([]);
  });
});
