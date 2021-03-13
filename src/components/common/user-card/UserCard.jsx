import React from 'react';
import { userRoles } from '../../../helpers/getRole';

import { Name, UserAddress, UserCardWrapper, UserName, UserPostalCode, UserRole, UserStatus } from './styled';
import { AvatarImage, AvatarLetter } from '../../header/profile-icon/styled';


export const UserCard = ({ name, surname, userRole, userName, avatar, address, city, postalCode, status }) => {
  const nameLetter = name.split('', 1)[0];
  const isAdmin = userRole === userRoles.superAdmin || userRole === userRoles.admin;

  return (
    <UserCardWrapper>
      <UserRole isAdmin={isAdmin}>{userRole}</UserRole>
      {
        avatar
          ? <AvatarImage isBig src={avatar} />
          : <AvatarLetter isBig>{nameLetter}</AvatarLetter>
      }
      <Name>{`${name} ${surname}`}</Name>
      <UserName>{`@${userName}`}</UserName>
      {status && <UserStatus>{`${status}`}</UserStatus>}
      {address && <UserAddress>{`${address}, ${city}`}</UserAddress>}
      {postalCode && <UserPostalCode>{`${postalCode}`}</UserPostalCode>}
    </UserCardWrapper>
  );
};
