import styled from 'styled-components'

export const Preloader = styled.span`
  display: inline-block;
  width: ${props => props.small ? '22px' : '80px'};
  height: ${props => props.small ? '22px' : '80px'};

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loading 1.2s linear infinite;
    width: ${props => props.small ? '22px' : '64px'};
    height: ${props => props.small ? '22px' : '64px'};
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`