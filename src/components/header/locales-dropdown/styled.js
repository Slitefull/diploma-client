import styled from 'styled-components'
import { Menu } from 'antd'


export const CustomMenu = styled(Menu)`
  background: #091421;
`

export const LocaleName = styled.span`
  margin: 0 10px 0 0;
  font-size: 16px;
  color: #000000;
`

export const DropdownLocaleName = styled.span`
  color: #ffffff;
`

export const LocaleFlag = styled.img`
  width: 20px;
  height: 13px;
  margin: 0 10px 0 0;
`

export const MenuItem = styled(Menu.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
