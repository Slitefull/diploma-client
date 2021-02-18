import styled from 'styled-components'
import { SettingOutlined } from '@ant-design/icons'

export const CustomSettingOutlined = styled(SettingOutlined)`
  display: block;
  margin: 0 auto 15px;
  color: #fff;
  width: 85px;
  padding: 20px;
  background: #19b5fe;
  border-radius: 50px;
  font-size: 40px;
`

export const ProfileFormWrapper = styled.div`
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  transition: 0.5s;
  box-shadow: 0 0 5px darkslategrey;
  
  &:hover {
    transition: 0.5s;
    box-shadow: 0 0 10px darkslategrey;
  }
`

export const Button = styled.button`
  margin: 20px 0;
  padding: 15px 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.disabled ? 'grey' : '#0c9'};
  border: none;
  outline: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:focus{
    box-shadow: 0 0 0 0.2rem rgba(104,122,232,.25);
  }

  &:hover {
    transition: 0.3s;
    background: ${props => props.disabled ? 'grey' : '#219d7c'};
  }
`
