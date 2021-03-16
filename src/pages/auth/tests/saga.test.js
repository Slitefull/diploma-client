import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { authActions } from '../store';
import { authWatcher, handleLogin, handleRegister, logout } from '../saga';
import { authApi } from '../api';
import { appActions } from '../../../app/store';
import { setInitData } from '../../../app/saga';


describe('auth page sagas', () => {
  describe('handleLogin saga', () => {
    it('should successfully passed saga and redirected to dashboard page', () => {
      const action = {
        type: authActions.login.type,
        payload: {
          email: 'viptitechko1@gmail.com',
          password: '123123',
        },
      };

      const token = 'token';

      const generator = handleLogin(action);
      expect(generator.next().value).toEqual(put(appActions.setLoading(true)));
      expect(generator.next().value).toEqual(call(authApi.login, action.payload));
      expect(generator.next({ token }).value).toEqual(call(setInitData, token));
      expect(generator.next().done).toBeTruthy();
    });

    it('should show error if request is incorrect', () => {
      const action = {
        type: authActions.login.type,
        payload: {
          email: 'viptitechko1@gmail.com',
          password: '123123',
        },
      };

      const serverMessage = 'Unexpected response from server';

      const generator = handleLogin(action);
      generator.next();
      expect(generator.throw(serverMessage).value).toEqual(put(appActions.setLoading(false)));
      expect(generator.next().value).toEqual(call(message.error, serverMessage));
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('authWatcher', () => {
    const generator = authWatcher();

    it('should wait for every login action and call handleLogin', () => {
      expect(generator.next().value).toEqual(takeLatest(authActions.login.type, handleLogin));
    });

    it('should wait for every register action and call handleRegister', () => {
      expect(generator.next().value).toEqual(takeLatest(authActions.register.type, handleRegister));
    });

    it('should wait for every logout action and call logout', () => {
      expect(generator.next().value).toEqual(takeLatest(authActions.logout.type, logout));
    });
  });
});
