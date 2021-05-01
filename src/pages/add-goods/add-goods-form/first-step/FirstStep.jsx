import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input as AntInput, Modal, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { profileSelectors } from '../../../profile/selectors';
import { goodsSelectors } from '../../selectors';
import { goodsActions } from '../../store';
import { FormInput, Textarea } from '../../../../components/common/form-control/FormControl';
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

  const userName = useSelector(profileSelectors.getName);
  const categories = useSelector(goodsSelectors.getAllCategories);

  const isValidMessage = onlyLetters(newCategory);

  const onChangeNameHandler = useCallback((e) => setName(e.target.value), [setName]);
  const onChangeDescriptionHandler = useCallback((e) => setDescription(e.target.value), [setDescription]);
  const onChangeCategoryHandler = useCallback((e) => setNewCategory(e.target.value), [setNewCategory]);
  const onChangeSelectCategoryHandler = useCallback((value) => setCategory(value), [setCategory]);
  const onSetIsModalVisibleHandler = useCallback(() => setIsModalVisible(true), [setIsModalVisible]);
  const onOkModalHandler = useCallback(() => dispatch(goodsActions.createCategory(newCategory)), [newCategory]);
  const onCancelModalHandler = useCallback(() => setIsModalVisible(false), [setIsModalVisible]);

  return (
    <div>
      <Greeting>
        {`${t('welcome')} ${userName}, ${t('thereYouCanAddNewGoods')}`}
      </Greeting>
      <FormLabel>
        {`${t('goodsName')} *`}
      </FormLabel>
      <FormField
        name="name"
        component={FormInput}
        validate={[required, maxLength40]}
        onChange={onChangeNameHandler}
      />
      <FormLabel htmlFor="description">
        {`${t('description')} *`}
      </FormLabel>
      <FormField
        name="description"
        component={Textarea}
        validate={[required, maxLength800]}
        onChange={onChangeDescriptionHandler}
      />
      <Wrapper row justify center style={{ margin: '10px 0' }}>
        <FormLabel htmlFor="category">
          {`${t('category')} *`}
        </FormLabel>
        <Button
          type="primary"
          onClick={onSetIsModalVisibleHandler}
        >
          {t('addNew')}
        </Button>
        <Modal
          title={t('createCategory')}
          visible={isModalVisible}
          onOk={onOkModalHandler}
          onCancel={onCancelModalHandler}
        >
          <AntInput
            placeholder={t('category')}
            onChange={onChangeCategoryHandler}
          />
          {isValidMessage && (
            <p style={{ color: 'red' }}>
              {isValidMessage}
            </p>
          )}
        </Modal>
      </Wrapper>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder={t('selectCategory')}
        optionFilterProp="children"
        onChange={onChangeSelectCategoryHandler}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {categories.map((category) => (
          <Option
            value={category.name}
            key={category.id}
          >
            {category.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
