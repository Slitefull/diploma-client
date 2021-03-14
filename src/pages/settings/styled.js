import styled from 'styled-components';
import { SettingOutlined } from '@ant-design/icons';


export const CustomSettingOutlined = styled(SettingOutlined)` && {
  display: block;
  margin: 0 auto 15px;
  color: #fff;
  width: 85px;
  padding: 20px;
  background: #19b5fe;
  border-radius: 50px;
  font-size: 40px;
}`;

export const SettingsWrapper = styled.div` && {
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
