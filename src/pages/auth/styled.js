import styled from 'styled-components';
import background from '../../assets/login/background.svg';


export const LoginBackground = styled.div`
  background-position: center;
  background-size: cover;
  display: block;
  background-image: url(${background});
  height: 100%;
  width: 100%;
`;

export const RegistrationBackground = styled.div`
  background-position: center;
  background-size: cover;
  display: block;
  background-image: url(${background});
  height: 100%;
  width: 100%;
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  margin: ${(props) => (props.withoutMargin ? 0 : '10px 0 0 0')};
  padding: 10px 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.disabled ? 'grey' : '#687ae8')};
  border: none;
  outline: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  transition: 0.3s;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  
  &:hover {
    transition: 0.3s;
    background: ${(props) => (props.disabled ? 'grey' : '#475de3')};
  }
`;
