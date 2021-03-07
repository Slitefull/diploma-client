import { call } from 'redux-saga/effects';
import { editProfile } from '../saga';
import { profileActions } from '../store';
import { profileApi } from '../api';


describe('editProfile saga', () => {
  it('should show error if payload is undefined', () => {
    const action = {
      type: profileActions.saveProfileSettings.type,
      payload: undefined,
    };

    const userData = {
      userId: '602ec0030a42b8419055d672',
      email: 'viptitechko1@gmail.com',
      name: 'Max',
      surname: 'Tytechko',
      userName: 'Invizza',
    };

    const generator = editProfile(action);
    expect(generator.next().value).toEqual(call(profileApi.saveProfileSettings, userData));
  });
});
