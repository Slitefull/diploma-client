import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SidebarWrapper = styled.div` && {
  position: relative;
  background: #12171E;
  padding: ${(props) => (props.isOpen ? '15px 25px' : '15px 10px')};
  min-width: ${(props) => (props.isOpen ? '170px' : '100px')};
  transition: 0.5s;
`;

export const Logo = styled.img` && {
  width: 35px;
}`;

export const CustomHr = styled.hr` && {
  height: 1px;
  width: 28px;
  border: none;
  background: #75808D;
  margin: 15px 0;
}`;

export const CloseSidebarButtonWrapper = styled.div` && {
  padding: 5px;
  background: #4285F4;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 0;
}`;

export const Avatar = styled.div` && {
  border: 1px solid #4285F4;
  width: 28px;
  height: 28px;
  display: grid;
  align-items: center;
  background: url(${(props) => props.src}) center;
  border-radius: 50%;
  background-size: cover;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  color: #ffffff;
}`;

export const CloseSidebarButtonArrow = styled.img` && {
  width: 10px;
  transition: 0.5s;
  transform: ${(props) => (props.isRotated
    ? 'rotate(180deg)'
    : 'rotate(0deg)')};
}`;

export const UserName = styled.span` && {
  margin: 0 0 0 10px;
  font-size: 12px;
  color: #F5F5F5;
}`;

export const MenuItemsWrapper = styled.div`&& {
  display: flex;
  flex-direction: column;
  padding: 20px 0 80px;
  justify-content: space-between;
  align-items: ${(props) => (props.isOpen ? 'flex-start' : 'center')};
}`;

export const AvatarWrapper = styled(Link)`
  display: flex;
  background: ${(props) => (props.isActive ? '#2B3643' : 'transparent')};
  width: ${(props) => (props.isFull ? '100%' : 'auto')};
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s;
  margin: 0 0 15px;

  &:hover {
    transition: 0.5s;
    background: #2B3643;
  }
`;
