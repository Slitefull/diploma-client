import React from 'react';
import { Name, UserCardWrapper, UserName, UserRole } from './styled';
import { AvatarLetter } from '../../header/profile-icon/styled';
import { userRoles } from '../../../helpers/getRole';


export const UserCard = ({ name, surname, userRole, userName }) => {
  const nameLetter = name.split('', 1)[0];
  const isAdmin = userRole === userRoles.superAdmin || userRole === userRoles.admin;

  return (
    <UserCardWrapper>
      <UserRole isAdmin={isAdmin}>{userRole}</UserRole>
      <AvatarLetter isBig>{nameLetter}</AvatarLetter>
      <Name>{`${name} ${surname}`}</Name>
      <UserName>{`@${userName}`}</UserName>
    </UserCardWrapper>
  );
};
