import styled from 'styled-components';


export const UserCardWrapper = styled.div` && {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 350px;
  margin: 0 0 40px;
}`;

export const UserRole = styled.span` && {
  background: ${(props) => (props.isAdmin ? '#fcddde' : '#d1f0ff')};
  color: ${(props) => (props.isAdmin ? '#f2545b' : '#19b5fe')};
  text-align: center;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  align-self: flex-end;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    background: ${(props) => (props.isAdmin ? '#fac6c7' : '#b8e8ff')};;
  }
}`;

export const Name = styled.p` && {
  font-size: 25px;
  font-weight: 600;
  color: #3e4676;
  margin: 0;
}`;

export const UserName = styled.p` && {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #6e7da2;
}`;

export const UserStatus = styled.p` && {
  margin: 0;
  color: #6e7da2;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}`;

export const UserAddress = styled.p` && {
  margin: 0;
  color: #3e4676;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-end;
}`;

export const UserPostalCode = styled.span` && {
  font-weight: 600;
  font-size: 12px;
  align-self: flex-end;
  color: #3e4676;
}`;
