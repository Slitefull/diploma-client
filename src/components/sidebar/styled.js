import styled from 'styled-components'

export const SidebarWrapper = styled.aside`
  padding: 10px;
  height: 100%;
  width: 260px;
  background: #212841;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-75%)'};
  transition: transform 0.2s ease-in-out;
`

export const FixedTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({open}) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;

  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
