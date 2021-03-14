import styled from 'styled-components';
import { MehOutlined } from '@ant-design/icons';
import { Field } from 'redux-form';


export const CustomMehOutlined = styled(MehOutlined)` && {
  display: block;
  margin: 0 auto 15px;
  color: #fff;
  width: 85px;
  padding: 20px;
  background: #19b5fe;
  border-radius: 50px;
  font-size: 40px;
}`;

export const CustomFormField = styled(Field)`
  display: block;
  font-size: 14px;
  line-height: 20px;
  border-radius: ${(props) => (props.secondElement ? '0 5px 5px 0' : '5px 0 0 5px')};
  background: #ffffff;
  outline: none;
  padding: 12px 0 12px 10px;
  border: 1px solid #e1e4e8;
  width: 100%;

  &:focus {
    background: #e8f0fe;
    box-shadow: 0 0 4px #0366d6;
  }
`;

export const ProfileFormWrapper = styled.div` && {
  min-width: 1250px;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 5px;
  margin: 40px auto;
  transition: 0.5s;
  box-shadow: 0 0 5px darkslategrey;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 0 10px darkslategrey;
  }
}`;

export const Button = styled.button` && {
  margin: 20px 0;
  padding: 15px 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.disabled ? 'grey' : '#0c9')};
  border: none;
  outline: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.3s;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(104, 122, 232, .25);
  }

  &:hover {
    transition: 0.3s;
    background: ${(props) => (props.disabled ? 'grey' : '#219d7c')};
  }
}`;

export const AddressWrapper = styled.div` && {
  display: flex;
}`;
