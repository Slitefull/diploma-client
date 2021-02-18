import React from 'react'
import { AvatarImage, AvatarLetter } from './styled'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../../../pages/profile/selectors'


export const ProfileIcon = () => {
  const userName = useSelector(profileSelectors.getUserName).split('', 1)[0]
  const avatar = useSelector(profileSelectors.getUserAvatar)

  return (
    <>
      {
        avatar
          ? <AvatarImage src={avatar}/>
          : <AvatarLetter>{userName}</AvatarLetter>
      }
    </>
  )
}

//TODO avatar letter
