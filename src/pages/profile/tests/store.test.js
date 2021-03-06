import { profileActions, profileReducer } from '../store';


const mockInitialState = {
  profile: {},
};

describe('Profile reducer', () => {
  it('should setUserData action change store', () => {
    const action = {
      type: profileActions.setUserData.type,
      payload: {
        name: 'Max',
        surname: 'Tytechko',
      },
    };

    const expectedState = {
      profile: {
        name: 'Max',
        surname: 'Tytechko',
      },
    };

    const reducer = profileReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should saveProfileSettings action change store', () => {
    const action = {
      type: profileActions.saveProfileSettings.type,
      payload: {
        name: 'Max',
        surname: 'Tytechko',
      },
    };

    const mockInitialStateWithProfile = {
      profile: {
        name: 'Oleg',
        surname: 'Testov',
      },
    };

    const expectedState = {
      profile: {
        name: 'Oleg',
        surname: 'Testov',
      },
    };

    const reducer = profileReducer(mockInitialStateWithProfile, action);
    expect(reducer).toEqual(expectedState);
  });
});
