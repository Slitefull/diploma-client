import React from 'react';
import { useSelector } from 'react-redux';
import { UserCard } from '../../../components/common/user-card/UserCard';
import { dashboardSelectors } from '../../dashboard/selectors';


export const UsersList = () => {
  const users = useSelector(dashboardSelectors.getAllUsers);

  return (
    <>
      { users.map((user) => (
        <UserCard
          name={user.name}
          surname={user.surname}
          userRole={user.role}
          userName={user.userName}
        />
      )) }
    </>
  );
};
