import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Input as AntInput, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { profileSelectors } from '../../../profile/selectors';
import { goodsSelectors } from '../../selectors';
import { goodsActions } from '../../store';
import { Input, Textarea } from '../../../../components/common/form-control/FormControl';
import { FormField, FormLabel } from '../../../../components/common/form-control/styled';
import { maxLengthCreator, onlyLetters, required } from '../../../../helpers/validators/validators';

import { Wrapper } from '../../../../styled';
import { Greeting } from '../styled';


const maxLength40 = maxLengthCreator(40);
const maxLength800 = maxLengthCreator(800);

export const FirstStep = ({ setName, setDescription, setCategory }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const userName = useSelector(profileSelectors.getUserName);
  const categories = useSelector(goodsSelectors.getAllCategories);

  const isValidMessage = onlyLetters(newCategory);

  return (
    <div>
      <Greeting>
        {t('welcome')}
        {userName}
        ,
        {' '}
        {t('thereYouCanAddNewGoods')}
      </Greeting>
      <FormLabel htmlFor="name">
        {t('goodsName')}
        *
      </FormLabel>
      <FormField
        name="name"
        component={Input}
        validate={[required, maxLength40]}
        onChange={(e) => setName(e.target.value)}
      />
      <FormLabel htmlFor="description">
        {t('description')}
        {' '}
        *
      </FormLabel>
      <FormField
        name="description"
        component={Textarea}
        validate={[required, maxLength800]}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Wrapper row justify center style={{ margin: '10px 0' }}>
        <FormLabel htmlFor="category">
          {t('category')}
          {' '}
          *
        </FormLabel>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>{t('addNew')}</Button>
        <Modal
          title={t('createCategory')}
          visible={isModalVisible}
          onOk={() => dispatch(goodsActions.createCategory(newCategory))}
          onCancel={() => setIsModalVisible(false)}
        >
          <AntInput
            placeholder={t('category')}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          {isValidMessage
            ? <p style={{ color: 'red' }}>{isValidMessage}</p>
            : null}
        </Modal>
      </Wrapper>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder={t('selectCategory')}
        optionFilterProp="children"
        onChange={(value) => setCategory(value)}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {categories.map((category) => <Option value={category.name} key={category.id}>{category.name}</Option>)}
      </Select>
    </div>
  );
};
