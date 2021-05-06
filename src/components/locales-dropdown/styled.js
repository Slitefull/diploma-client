import styled from 'styled-components';
import { Menu } from 'antd';


export const CustomMenu = styled(Menu)`
  background: transparent;
`;

export const LocaleFlag = styled.img`
  width: 20px;
`;

export const MenuItem = styled(Menu.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 !important;
  padding: 0 !important;
`;

export const LocalesDropdownTrigger = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
