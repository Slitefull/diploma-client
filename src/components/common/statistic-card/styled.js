import styled from 'styled-components'

export const InfoCardIcon = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  background: ${props => props.background};
  border-radius: 50%;
`

export const InfoCard = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: .75rem 1.25rem;
  border: 0 solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
  background-color: #fff;
  background-clip: border-box;
  transition: box-shadow ease .2s;
  box-shadow: 0 2px 4px rgba(126, 142, 177, .12);

  &:hover {
    box-shadow: 0 5px 12px rgba(126, 142, 177, .2);
  }
`

export const InfoCardTitle = styled.p`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const InfoCardCount = styled.span`
  font-size: 1.575rem;
  font-weight: 00;
  line-height: 1.2;
  margin-bottom: .5rem;
`

export const InfoCardPercent = styled.span`
  font-weight: 600;
  line-height: 1.2;
  font-size: .9rem;
  padding: 4px 0;
  color: ${props => props.isGrow ? '#00ccb3' : '#f2595b'};
`