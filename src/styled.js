import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
    font-family: 'circe', Helvetica, Sans-Serif;
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  min-height: calc(100% - 146px);
  margin: auto;
  display: flex;
  padding: 0 25px;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => (props.alignCenter ? 'center' : 'normal')};
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'normal')};
`;

export const Wrapper = styled.div`
  display: ${(props) => (props.inline ? 'inline' : 'flex')};
  align-items: ${(props) => (props.center ? 'center' : 'inherit')};
  width: ${(props) => (props.full ? '100%' : '')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => (props.justify ? 'space-between' : 'inherit')};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: ${(props) => (props.withoutMargin ? 0 : '10px 0 0 0')};
  padding: 5px 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.disabled ? 'grey' : 'rgba(255,255,255,.15)')};
  border: none;
  outline: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:focus{
    box-shadow: 0 0 0 0.2rem rgba(104,122,232,.25);
  }
  
  &:hover {
    transition: 0.3s;
    background: ${(props) => (props.disabled ? 'grey' : 'rgba(128,128,128,.15)')};
  }
`;

export const Count = styled.span`
  font-size: 50px;
  text-align: center;
`;

export const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 50px;
  margin: ${(props) => (props.center ? 'auto' : '0 30px 0 0')};
`;

export const PagePanel = styled.div`
  padding: 40px 20px 100px;
  width: 100%;
  max-height: 244px;
  background-color: #28304e;
  background-size: contain;
  background-image: url("https://cdn.hipwallpaper.com/i/29/69/M5kWUT.png");
`;

export const PanelText = styled.h1`
  font-weight: 500;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: ${(props) => (props.subtitle ? '14px' : '24px')};
  opacity: ${(props) => (props.subtitle ? '0.75' : '1')};
  color: #ffffff;
`;
