import styled from 'styled-components';
import { BsArrowDownShort } from 'react-icons/all';


export const TodoListWrapper = styled.div` && {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  padding: 5px 0;
}`;

export const Title = styled.span` && {
  font-size: 16px;
  font-weight: 600;
  color: #3e4676;
  margin: 0 0 0 10px;
}`;

export const IconWrapper = styled.div` && {
  display: flex;
  align-items: center;
  cursor: pointer;
}`;

export const CustomArrow = styled(BsArrowDownShort)`
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.5s;
  cursor: pointer;
  margin-left: auto;
`;
