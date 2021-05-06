import styled from 'styled-components';


export const ButtonWrapper = styled.button` && {
  padding: 9px 14px;
  outline: none;
  border: 1px solid rgb(66, 133, 244);
  border-radius: 4px;
  color: ${(props) => (props.confirm ? '#ffffff' : 'rgb(66, 133, 244)')};
  background-color: ${(props) => (props.confirm ? 'rgb(66, 133, 244)' : '#ffffff')};
  max-height: 34px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  margin-left: ${(props) => (props.confirm ? '10px' : '0')};
  
  &:hover {
    background-color: ${(props) => (props.confirm ? '#2458ad' : '#f2f2f2') };
  }
}`;
