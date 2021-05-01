import styled from 'styled-components';


export const TodoItemWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid #80808070;
  padding: 20px 0;
}`;

export const TodoText = styled.p` && {
  font-size: 14px;
  transition: 0.5s;
  margin: 0 0 0 20px;
  text-decoration: ${(props) => (props.isActive ? 'auto' : 'line-through')};
  opacity: ${(props) => (props.isActive ? '1' : '0.7')};
}`;
