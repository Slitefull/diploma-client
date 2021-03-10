import { dashboardSelectors } from '../selectors';


const mockInitialState = {
  dashboard: {
    users: [
      {
        name: 'Max',
        role: 'superAdmin',
      },
      {
        name: 'Darina',
        role: 'admin',
      },
      {
        name: 'Oleksandr',
        role: 'admin',
      },
      {
        name: 'Artem',
        role: 'regular',
      },
      {
        name: 'Anna',
        role: 'regular',
      },
    ],
  },
};

describe('dashboard selectors', () => {
  it('should return array getAllUsers selector', () => {
    expect(dashboardSelectors.getAllUsers(mockInitialState)).toEqual([
      {
        name: 'Max',
        role: 'superAdmin',
      },
      {
        name: 'Darina',
        role: 'admin',
      },
      {
        name: 'Oleksandr',
        role: 'admin',
      },
      {
        name: 'Artem',
        role: 'regular',
      },
      {
        name: 'Anna',
        role: 'regular',
      },
    ]);
  });
});
