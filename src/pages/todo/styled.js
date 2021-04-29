import styled from 'styled-components';


export const TodoWrapper = styled.div` && {
  transform: translateY(-50px);
  min-width: 800px;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
  transition: 0.5s;
  box-shadow: 0 0 5px darkslategrey;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 0 10px darkslategrey;
  }
}`;

export const TodoInput = styled.input` && {
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  font-size: 12px;
  background: transparent;
}`;

export const CreateTodoButton = styled.button` && {
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
}`;
