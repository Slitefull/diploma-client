import styled from 'styled-components';


export const Preloader = styled.span`
  display: inline-block;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    border: ${(props) => `6px solid ${props.color}`};
    border-color: ${(props) => `${props.color} transparent ${props.color} transparent`};
    animation: loading 1.2s linear infinite;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
