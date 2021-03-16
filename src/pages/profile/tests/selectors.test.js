import { profileSelectors } from '../selectors';


const mockInitialState = {
  profile: {
    profile: {
      userId: '602ec0030a42b8419055d672',
      name: 'Max',
      role: 'superAdmin',
      surname: 'Tytechko',
      userName: 'invizza',
      email: 'viptitechko1@gmail.com',
      avatar: 'https://avatar',
      address: 'Nauky avenue, 36',
      city: 'Kyiv',
      postalCode: '03043',
      status: 'Lorem ipsum dolor sit amet',
    },
  },
};

describe('profile page selectors', () => {
  it('should return string getUserId selector', () => {
    expect(profileSelectors.getUserId(mockInitialState)).toEqual('602ec0030a42b8419055d672');
  });

  it('should return string getUserName selector', () => {
    expect(profileSelectors.getUserName(mockInitialState)).toEqual('Max');
  });

  it('should return string getUserSurname selector', () => {
    expect(profileSelectors.getUserSurname(mockInitialState)).toEqual('Tytechko');
  });

  it('should return string getUserUserName selector', () => {
    expect(profileSelectors.getUserUserName(mockInitialState)).toEqual('invizza');
  });

  it('should return string getUserEmail selector', () => {
    expect(profileSelectors.getUserEmail(mockInitialState)).toEqual('viptitechko1@gmail.com');
  });

  it('should return string getUserRole selector', () => {
    expect(profileSelectors.getUserRole(mockInitialState)).toEqual('superAdmin');
  });

  it('should return string getUserAvatar selector', () => {
    expect(profileSelectors.getUserAvatar(mockInitialState)).toEqual('https://avatar');
  });

  it('should return string getUserAddress selector', () => {
    expect(profileSelectors.getUserAddress(mockInitialState)).toEqual('Nauky avenue, 36');
  });

  it('should return string getUserCity selector', () => {
    expect(profileSelectors.getUserCity(mockInitialState)).toEqual('Kyiv');
  });

  it('should return string getUserPostalCode selector', () => {
    expect(profileSelectors.getUserPostalCode(mockInitialState)).toEqual('03043');
  });

  it('should return string getUserStatus selector', () => {
    expect(profileSelectors.getUserStatus(mockInitialState)).toEqual('Lorem ipsum dolor sit amet');
  });
});
