import { dashboardSelectors } from '../selectors';


const mockInitialState = {
  dashboard: {
    users: [
      { name: 'Max', role: 'superAdmin' },
      { name: 'Darina', role: 'admin' },
      { name: 'Artem', role: 'regular' },
    ],
  },
};

describe('dashboard selectors', () => {
  it('should return array getAllUsers selector', () => {
    expect(dashboardSelectors.getAllUsers(mockInitialState)).toEqual([
      { name: 'Max', role: 'superAdmin' },
      { name: 'Darina', role: 'admin' },
      { name: 'Artem', role: 'regular' },
    ]);
  });

  it('should return array getAllUsersCount selector', () => {
    expect(dashboardSelectors.getAllUsersCount(mockInitialState)).toEqual(3);
  });
});
