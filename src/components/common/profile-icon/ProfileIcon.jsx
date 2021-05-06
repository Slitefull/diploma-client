import React from 'react';
import { useSelector } from 'react-redux';
import { profileSelectors } from '../../../pages/profile/selectors';

import { AvatarImage, AvatarLetter } from './styled';


export const ProfileIcon = ({ isBig }) => {
  const userName = useSelector(profileSelectors.getName).split('', 1)[0];
  const avatar = useSelector(profileSelectors.getAvatar);

  return (
    <>
      {
        avatar
          ? (
            <AvatarImage
              isBig={isBig}
              src={avatar}
            />
          )
          : (
            <AvatarLetter
              isBig={isBig}
            >
              {userName}
            </AvatarLetter>
          )
      }
    </>
  );
};
