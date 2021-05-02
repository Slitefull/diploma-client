import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkWrapper = styled(Link)`
  width: ${(props) => (props.isFull ? '100%' : 'auto')};
`;

export const MenuItemButtonWrapper = styled.div`&& {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: ${(props) => (props.isFull ? 'auto' : 'center')};
  margin: 0 0 5px 0;
  background: ${(props) => (props.isActive ? '#2B3643' : 'transparent')};
  border-radius: 4px;
  padding: 10px;
  max-height: 40px;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    transition: 0.5s;
    background: #2B3643;
  }
}`;

export const MenuItemButtonIcon = styled.img`&& {
  width: 20px;
  margin: ${(props) => (props.isFull ? '0 10px 0 0' : '0')};
}`;

export const MenuItemButtonText = styled.span`&& {
  font-size: 12px;
  color: ${(props) => (props.isActive ? '#ffffff' : '#C4C4C4')};
}`;

export const UnreadMessagesCount = styled.div` && {
  background: #4285F4;
  border-radius: 8px;
  color: #ffffff;
  max-height: 18px;
  font-size: 11px;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
}`;
