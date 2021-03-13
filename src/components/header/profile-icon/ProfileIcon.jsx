import React from 'react';
import { useSelector } from 'react-redux';
import { AvatarImage, AvatarLetter } from './styled';
import { profileSelectors } from '../../../pages/profile/selectors';


export const ProfileIcon = ({ isBig }) => {
  const userName = useSelector(profileSelectors.getUserName).split('', 1)[0];
  const avatar = useSelector(profileSelectors.getUserAvatar);

  return (
    <>
      {
        avatar
          ? <AvatarImage isBig={isBig} src={avatar} />
          : <AvatarLetter isBig={isBig}>{userName}</AvatarLetter>
      }
    </>
  );
};
