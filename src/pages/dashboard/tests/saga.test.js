import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import i18next from 'i18next';
import { dashboardActions } from '../store';
import { dashboardWatcher, makeAdmin, removeAdmin } from '../saga';
import { dashboardApi } from '../api';


describe('dashboard page sagas', () => {
  describe('makeAdmin saga', () => {
    it('should successfully passed saga and make admin', () => {
      const action = {
        type: dashboardActions.makeAdmin.type,
        payload: {
          userId: '123123',
        },
      };

      const data = [
        {
          userId: '123123',
          name: 'Max',
        },
        {
          userId: '321321',
          name: 'Oleg',
        },
      ];

      const generator = makeAdmin(action);
      expect(generator.next().value).toEqual(call(dashboardApi.makeAdmin, action.payload));
      expect(generator.next().value).toEqual(call(dashboardApi.getAllUsers));
      expect(generator.next({ data }).value).toEqual(put(dashboardActions.setUsers(data)));
      expect(generator.next().value).toEqual(call(message.success, i18next.t('newAdminHasBeenAdded')));
      expect(generator.next().done).toBeTruthy();
    });

    it('should show error if request is incorrect', () => {
      const action = {
        type: dashboardActions.makeAdmin.type,
        payload: {
          id: '123123',
        },
      };

      const serverMessage = 'Unexpected response from server';

      const generator = makeAdmin(action);
      generator.next();
      expect(generator.throw(serverMessage).value).toEqual(call(message.error, serverMessage));
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('removeAdmin saga', () => {
    it('should successfully passed saga and remove admin', () => {
      const action = {
        type: dashboardActions.removeAdmin.type,
        payload: {
          userId: '321321',
        },
      };

      const data = [
        {
          userId: '123123',
          name: 'Max',
        },
        {
          userId: '321321',
          name: 'Oleg',
        },
      ];

      const generator = removeAdmin(action);
      expect(generator.next().value).toEqual(call(dashboardApi.removeAdmin, action.payload));
      expect(generator.next().value).toEqual(call(dashboardApi.getAllUsers));
      expect(generator.next({ data }).value).toEqual(put(dashboardActions.setUsers(data)));
      expect(generator.next().value).toEqual(call(message.success, i18next.t('adminHasBeenRemoved')));
      expect(generator.next().done).toBeTruthy();
    });

    it('should show error if request is incorrect', () => {
      const action = {
        type: dashboardActions.removeAdmin.type,
        payload: {
          id: '321321',
        },
      };

      const serverMessage = 'Unexpected response from server';

      const generator = removeAdmin(action);
      generator.next();
      expect(generator.throw(serverMessage).value).toEqual(call(message.error, serverMessage));
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('dashboardWatcher', () => {
    const generator = dashboardWatcher();

    it('should wait for every makeAdmin action and call makeAdmin', () => {
      expect(generator.next().value).toEqual(takeLatest(dashboardActions.makeAdmin.type, makeAdmin));
    });

    it('should wait for every removeAdmin action and call handleRegister', () => {
      expect(generator.next().value).toEqual(takeLatest(dashboardActions.removeAdmin.type, removeAdmin));
    });
  });
});
