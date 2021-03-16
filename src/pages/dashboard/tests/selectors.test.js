import { dashboardSelectors } from '../selectors';


const mockInitialState = {
  dashboard: {
    users: [
      { name: 'Max', role: 'superAdmin' },
      { name: 'Sanya', role: 'admin' },
      { name: 'Artem', role: 'regular' },
    ],
  },
};

describe('dashboard page selectors', () => {
  it('should return array getAllUsers selector', () => {
    expect(dashboardSelectors.getAllUsers(mockInitialState)).toEqual([
      { name: 'Max', role: 'superAdmin' },
      { name: 'Sanya', role: 'admin' },
      { name: 'Artem', role: 'regular' },
    ]);
  });

  it('should return array getAllSuperAdmins selector', () => {
    expect(dashboardSelectors.getAllSuperAdmins(mockInitialState)).toEqual([{
      name: 'Max',
      role: 'superAdmin',
    }]);
  });

  it('should return array getAllAdmins selector', () => {
    expect(dashboardSelectors.getAllAdmins(mockInitialState)).toEqual([{
      name: 'Sanya',
      role: 'admin',
    }]);
  });

  it('should return array getAllRegulars selector', () => {
    expect(dashboardSelectors.getAllRegulars(mockInitialState)).toEqual([{
      name: 'Artem',
      role: 'regular',
    }]);
  });

  it('should return number getAllUsersCount selector', () => {
    expect(dashboardSelectors.getAllUsersCount(mockInitialState)).toEqual(3);
  });

  it('should return number getAllSuperAdminsCount selector', () => {
    expect(dashboardSelectors.getAllSuperAdminsCount(mockInitialState)).toEqual(1);
  });

  it('should return number getAllAdminsCount selector', () => {
    expect(dashboardSelectors.getAllAdminsCount(mockInitialState)).toEqual(1);
  });

  it('should return number getAllRegularsCount selector', () => {
    expect(dashboardSelectors.getAllRegularsCount(mockInitialState)).toEqual(1);
  });
});
