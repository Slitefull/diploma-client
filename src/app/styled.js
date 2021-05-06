import styled from 'styled-components';


export const AppWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  background: #f4f7fc;
  min-height: 100%;
}`;

export const Overlay = styled.div` && {
  background-color: ${(props) => (props.isOverlay ? '#0a0a0a' : 'transparent')};
  position: fixed;
  opacity: ${(props) => (props.isOverlay ? '0.5' : '1')};
  z-index: ${(props) => (props.isOverlay ? '9999999' : '0')};;
  transition: 0.5s ease-out;
  height: 100%;
  width: 100%;
}`;
