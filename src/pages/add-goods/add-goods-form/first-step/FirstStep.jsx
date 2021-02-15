import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileSelectors } from '../../../profile/selectors'
import { Input, Textarea } from '../../../../components/common/form-control/FormControl'
import { FormField, FormLabel } from '../../../../components/common/form-control/styled'
import { maxLengthCreator, onlyLetters, required } from '../../../../helpers/validators/validators'

import { Greeting } from '../styled'
import { Button, Modal, Input as AntInput, Select } from 'antd'
import { Wrapper } from '../../../../styled'
import { goodsActions } from '../../store'
import { Option } from 'antd/es/mentions'


const maxLength40 = maxLengthCreator(40)
const maxLength800 = maxLengthCreator(800)

export const FirstStep = ({ setName, setDescription, setCategory }) => {
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newCategory, setNewCategory] = useState('')

  const userName = useSelector(profileSelectors.getUserName)
  const isValidMessage = onlyLetters(newCategory)

  return (
    <div>
      <Greeting>Welcome {userName}, there you can add new goods</Greeting>
      <FormLabel htmlFor={'name'}>Good's name *</FormLabel>
      <FormField
        name={'name'}
        component={Input}
        validate={[required, maxLength40]}
        onChange={e => setName(e.target.value)}
      />
      <FormLabel htmlFor={'description'}>Description *</FormLabel>
      <FormField
        name={'description'}
        component={Textarea}
        validate={[required, maxLength800]}
        onChange={e => setDescription(e.target.value)}
      />
      <Wrapper row justify center style={{ marginBottom: '10px' }}>
        <FormLabel htmlFor={'category'}>Category *</FormLabel>
        <Button type={'primary'} onClick={() => setIsModalVisible(true)}>Add new</Button>
        <Modal
          title="Create category"
          visible={isModalVisible}
          onOk={() => dispatch(goodsActions.createCategory(newCategory))}
          onCancel={() => setIsModalVisible(false)}
        >
          <AntInput
            placeholder="Category"
            onChange={e => setNewCategory(e.target.value)}
          />
          {Boolean(isValidMessage)
            ? <p style={{ color: 'red' }}>{isValidMessage}</p>
            : null
          }
        </Modal>
      </Wrapper>
      {/*<Select*/}
      {/*  showSearch*/}
      {/*  style={{ width: 200 }}*/}
      {/*  placeholder="Select a person"*/}
      {/*  optionFilterProp="children"*/}
      {/*  filterOption={(input, option) =>*/}
      {/*    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Option value="jack">Jack</Option>*/}
      {/*  <Option value="lucy">Lucy</Option>*/}
      {/*  <Option value="tom">Tom</Option>*/}
      {/*</Select>*/}
      <FormField
        name={'category'}
        component={Input}
        validate={[required]}
        onChange={e => setCategory(e.target.value)}
      />
    </div>
  )
}
