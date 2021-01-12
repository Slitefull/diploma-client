import React from 'react'
import { Dropdown } from 'antd'
import { BiDownArrow as ArrowDown } from 'react-icons/bi'
import { DropdownMenu } from './DropdownMenu/DropdownMenu'


export const HeaderDropdown = () => (
  <Dropdown
    overlay={<DropdownMenu/>}
    trigger='click'
  >
    <ArrowDown
      style={{
        height: 20,
        width: 20,
        color: '#ffffff'
      }}
    />
  </Dropdown>
)
