import { call, put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import i18next from 'i18next';
import { editProfile, profileWatcher } from '../saga';
import { profileActions } from '../store';
import { profileApi } from '../api';
import { getToken } from '../../../helpers/getToken';


describe('profile page saga', () => {
  describe('editProfile saga', () => {
    it('should successfully passed saga and edit profile ', () => {
      const action = {
        type: profileActions.saveProfileSettings.type,
        payload: {
          email: 'viptitechko1@gmail.com',
          name: 'Max',
          role: 'superAdmin',
          surname: 'Tytechko',
        },
      };

      const token = '123qwe';
      const userId = '123321';
      const userData = { ...action.payload, userId };

      const name = 'Max';
      const role = 'superAdmin';
      const surname = 'Tytechko';
      const address = 'Nauky 36';
      const avatar = 'https://avatar';
      const city = 'Kyiv';
      const email = 'viptitechko1@gmail.com';
      const postalCode = '03023';
      const status = 'Lorem ipsum';
      const userName = 'slitefull';

      const generator = editProfile(action);
      expect(generator.next().value).toEqual(call(getToken));
      expect(generator.next({ token }).value).toEqual(call(jwtDecode, { token }));
      expect(generator.next(userData).value).toEqual(call(profileApi.saveProfileSettings, userData));
      expect(generator.next({ token }).value).toEqual(call(jwtDecode, token));
      expect(generator.next({
        userId, name, surname, role, address, avatar, city, email, postalCode, status, userName,
      }).value)
        .toEqual(put(profileActions.setUserData({
          userId, name, surname, role, address, avatar, city, email, postalCode, status, userName,
        })));
      expect(generator.next().value).toEqual(call(message.success, i18next.t('userDataHasBeenChanged')));
      expect(generator.next().done).toBeTruthy();
    });

    it('should show error if request is incorrect', () => {
      const action = {
        type: profileActions.saveProfileSettings.type,
        payload: {
          email: 'viptitechko1@gmail.com',
          name: 'Max',
          role: 'superAdmin',
          surname: 'Tytechko',
        },
      };

      const serverMessage = 'Unexpected response from server';

      const generator = editProfile(action);
      generator.next();
      expect(generator.throw(serverMessage).value).toEqual(call(message.error, serverMessage));
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('profile Watcher', () => {
    const generator = profileWatcher();

    it('should wait for every saveProfileSettings action and call editProfile', () => {
      expect(generator.next().value).toEqual(takeLatest(profileActions.saveProfileSettings.type, editProfile));
    });
  });
});
