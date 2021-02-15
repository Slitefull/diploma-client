import React from 'react'
import { Avatar } from './styled'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../../../pages/profile/selectors'


export const ProfileIcon = () => {
  const userName = useSelector(profileSelectors.getUserName).split('', 1)[0]

  return (
    <Avatar>{userName}</Avatar>
  )
}

//TODO avatar letter
