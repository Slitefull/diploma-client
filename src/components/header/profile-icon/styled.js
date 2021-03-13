import styled from 'styled-components';


export const AvatarLetter = styled.span`
  width: ${(props) => (props.isBig ? '120px' : '40px')};
  height: ${(props) => (props.isBig ? '120px' : '40px')};
  display: grid;
  cursor: pointer;
  align-items: center;
  background: #28304e;
  border-radius: 50%;
  text-align: center;
  font-size: ${(props) => (props.isBig ? '28px' : '14px')};
  font-weight: 800;
  color: #ffffff;
`;

export const AvatarImage = styled.div`
  width: ${(props) => (props.isBig ? '120px' : '40px')};
  height: ${(props) => (props.isBig ? '120px' : '40px')};
  display: grid;
  cursor: pointer;
  align-items: center;
  background: url(${(props) => props.src}) center;
  border-radius: 50%;
  background-size: cover;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  color: #ffffff;
`;
