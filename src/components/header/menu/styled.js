import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavLinkItem = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
  color: #ffffff;
  
  &:first-child {
    margin: 0;
  }
  
  &:hover {
    color: #d8cece;
  }
`;
