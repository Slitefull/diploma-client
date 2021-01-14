import styled, { createGlobalStyle } from 'styled-components'

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
`

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  min-height: calc(100% - 146px);
  margin: auto;
  display: flex;
  padding: 0 25px;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.alignCenter ? 'center' : 'normal'};
  align-items: ${props => props.itemsCenter ? 'center' : 'normal'};
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify ? 'space-between' : 'inherit'};
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: ${props => props.withoutMargin ? 0 : '10px 0 0 0'};
  padding: 5px 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.disabled ? 'grey' : 'rgba(255,255,255,.15)'};
  border: none;
  outline: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:focus{
    box-shadow: 0 0 0 0.2rem rgba(104,122,232,.25);
  }
  
  &:hover {
    transition: 0.3s;
    background: ${props => props.disabled ? 'grey' : 'rgba(128,128,128,.15)'};
  }
`

export const Window = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  border-radius: 5px;
  padding: ${props => props.hasError ? '4px 0' : '15px 0'};
  background: ${props => props.hasError ? '#ffe3e6' : 'transparent'};
  border: ${props => props.hasError ? '1px solid #9d1c232b' : '1px solid #d8dee2'};
`

export const Count = styled.span`
  font-size: 50px;
  text-align: center;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 50px;
  margin: 0 30px 0 0;
`

export const PagePanel = styled.div`
  padding: 40px 20px 100px;
  width: 100%;
  background-color: #28304e;
`

export const PanelText = styled.h1`
  font-weight: 500;
  font-size: ${props => props.subtitle ? '14px' : '22px'};
  opacity: ${props => props.subtitle ? '0.75' : '1'};
  color: #ffffff;
`