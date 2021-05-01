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
    expect(profileSelectors.getId(mockInitialState)).toEqual('602ec0030a42b8419055d672');
  });

  it('should return string getUserName selector', () => {
    expect(profileSelectors.getName(mockInitialState)).toEqual('Max');
  });

  it('should return string getUserSurname selector', () => {
    expect(profileSelectors.getSurname(mockInitialState)).toEqual('Tytechko');
  });

  it('should return string getUserUserName selector', () => {
    expect(profileSelectors.getUserName(mockInitialState)).toEqual('invizza');
  });

  it('should return string getUserEmail selector', () => {
    expect(profileSelectors.getEmail(mockInitialState)).toEqual('viptitechko1@gmail.com');
  });

  it('should return string getUserRole selector', () => {
    expect(profileSelectors.getRole(mockInitialState)).toEqual('superAdmin');
  });

  it('should return string getUserAvatar selector', () => {
    expect(profileSelectors.getAvatar(mockInitialState)).toEqual('https://avatar');
  });

  it('should return string getUserAddress selector', () => {
    expect(profileSelectors.getAddress(mockInitialState)).toEqual('Nauky avenue, 36');
  });

  it('should return string getUserCity selector', () => {
    expect(profileSelectors.getCity(mockInitialState)).toEqual('Kyiv');
  });

  it('should return string getUserPostalCode selector', () => {
    expect(profileSelectors.getPostalCode(mockInitialState)).toEqual('03043');
  });

  it('should return string getUserStatus selector', () => {
    expect(profileSelectors.getStatus(mockInitialState)).toEqual('Lorem ipsum dolor sit amet');
  });
});
