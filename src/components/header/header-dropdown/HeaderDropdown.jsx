import React from 'react'
import { Dropdown } from 'antd'
import { DropdownMenu } from './DropdownMenu/DropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)


export const HeaderDropdown = () => (
  <Dropdown
    overlay={<DropdownMenu/>}
    trigger='click'
  >
    <FontAwesomeIcon
      icon={["fas", "sort-down"]}
      style={{color: "#212841", cursor: 'pointer'}}
    />
  </Dropdown>
)
