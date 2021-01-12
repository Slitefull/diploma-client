import React from 'react'
import { useSelector } from 'react-redux'
import { pagesLinks } from '../../../consts'
import defaultAvatar from '../../../assets/default-avatar.png'
import { profileSelectors } from '../../../pages/profile/selectors'

import { Container } from '../../../styled'
import { Avatar, UserName } from './styled'
import { NavLinkItem } from '../menu/styled'


export const ProfileIcon = () => {
	const name = useSelector(profileSelectors.getUserName)
	const avatar = useSelector(profileSelectors.getUserAvatar)

	return (
		<Container row itemsCenter>
			<Avatar src={ avatar || defaultAvatar }/>
			<NavLinkItem to={ pagesLinks.profile }>
        <UserName>{ name }</UserName>
			</NavLinkItem>
		</Container>
	)
}
