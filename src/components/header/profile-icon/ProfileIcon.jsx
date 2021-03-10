import React from 'react';
import { useSelector } from 'react-redux';
import { AvatarLetter } from './styled';
import { profileSelectors } from '../../../pages/profile/selectors';


export const ProfileIcon = () => {
  const userName = useSelector(profileSelectors.getUserName).split('', 1)[0];

  return <AvatarLetter>{userName}</AvatarLetter>;
};
