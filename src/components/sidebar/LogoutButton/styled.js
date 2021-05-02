import styled from 'styled-components';


export const LogoutButtonWrapper = styled.div`&& {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => (props.isFull ? '100%' : 'auto')};
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

export const LogoutButtonIcon = styled.img`&& {
  width: 20px;
  margin: ${(props) => (props.isFull ? '0 10px 0 0' : '0')};
}`;

export const LogoutButtonText = styled.span`&& {
  font-size: 12px;
  color: ${(props) => (props.isActive ? '#ffffff' : '#C4C4C4')};
}`;
