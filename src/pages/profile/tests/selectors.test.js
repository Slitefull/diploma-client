import { profileSelectors } from '../selectors';


const mockInitialState = {
  profile: {
    profile: {
      name: 'Max',
      role: 'superAdmin',
      surname: 'Test',
      userName: 'test',
      email: 'superTester@gmail.com',
    },
  },
};

describe('profile selectors', () => {
  it('should return string getUserName selector', () => {
    expect(profileSelectors.getUserName(mockInitialState)).toEqual('Max');
  });

  it('should return string getUserSurname selector', () => {
    expect(profileSelectors.getUserSurname(mockInitialState)).toEqual('Test');
  });

  it('should return string getUserUserName selector', () => {
    expect(profileSelectors.getUserUserName(mockInitialState)).toEqual('test');
  });

  it('should return string getUserEmail selector', () => {
    expect(profileSelectors.getUserEmail(mockInitialState)).toEqual('superTester@gmail.com');
  });

  it('should return string getUserRole selector', () => {
    expect(profileSelectors.getUserRole(mockInitialState)).toEqual('superAdmin');
  });
});
