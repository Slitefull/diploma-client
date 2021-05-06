import styled from 'styled-components';
import { Menu } from 'antd';


export const CustomMenu = styled(Menu)`
  background: transparent;
`;

export const LocaleName = styled.span`
  margin: 0 10px 0 0;
  font-size: 16px;
  color: #000000;
`;

export const DropdownLocaleName = styled.span`
  color: #ffffff;
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
