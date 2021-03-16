import { call, takeLatest } from 'redux-saga/effects';
import i18next from 'i18next';
import { message } from 'antd';
import { goodsActions } from '../store';
import { createCategory, createGoods, goodsWatcher } from '../saga';
import { goodsApi } from '../api';


describe('add-goods page sagas', () => {
  describe('createGoods saga', () => {
    it('should successfully passed saga and show success message', () => {
      const action = {
        type: goodsActions.createGoods.type,
        payload: [{}],
      };

      const generator = createGoods(action);
      expect(generator.next().value).toEqual(call(goodsApi.createGoods, action.payload));
      expect(generator.next().value).toEqual(call(message.success, i18next.t('newCommodityHasBeenCreated')));
      expect(generator.next().done).toBeTruthy();
    });

    it('should show error if request is incorrect', () => {
      const action = {
        type: goodsActions.createGoods.type,
        payload: [{}],
      };

      const serverMessage = 'Unexpected response from server';

      const generator = createGoods(action);
      generator.next();
      expect(generator.throw(serverMessage).value).toEqual(call(message.error, serverMessage));
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('createCategory saga', () => {
    it('should successfully passed saga and show success message', () => {
      const action = {
        type: goodsActions.createCategory.type,
        payload: [{}],
      };

      const generator = createCategory(action);
      expect(generator.next().value).toEqual(call(goodsApi.createCategory, action.payload));
      expect(generator.next().value).toEqual(call(message.success, i18next.t('newCategoryHasBeenCreated')));
      expect(generator.next().done).toBeTruthy();
    });

    it('should show error if request is incorrect', () => {
      const action = {
        type: goodsActions.createCategory.type,
        payload: [{}],
      };

      const serverMessage = 'Unexpected response from server';

      const generator = createCategory(action);
      generator.next();
      expect(generator.throw(serverMessage).value).toEqual(call(message.error, serverMessage));
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('goodsWatcher', () => {
    const generator = goodsWatcher();

    it('should wait for every createGoods action and call createGoods', () => {
      expect(generator.next().value).toEqual(takeLatest(goodsActions.createGoods.type, createGoods));
    });

    it('should wait for every createCategory action and call createCategory', () => {
      expect(generator.next().value).toEqual(takeLatest(goodsActions.createCategory.type, createCategory));
    });
  });
});
