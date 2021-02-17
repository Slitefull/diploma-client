import React from 'react'
import { HeaderDropdown } from './header-dropdown/HeaderDropdown'
import { ProfileIcon } from './profile-icon/ProfileIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { HeaderWrapper } from './styled'
import { Wrapper } from '../../styled'
import { LocalesDropdown } from './locales-dropdown/LocalesDropdown'
import { NavLinkItem } from './menu/styled'

library.add(fas)


export const Header = () => {
  return (
    <HeaderWrapper>
      <FontAwesomeIcon
        icon={["fas", "search"]}
        style={{ color: "#212841", cursor: 'pointer' }}
      />
      <Wrapper row>
        <LocalesDropdown/>
        <NavLinkItem to={'/profile'}>
          <ProfileIcon/>
        </NavLinkItem>
        <HeaderDropdown/>
      </Wrapper>
    </HeaderWrapper>
  )
}
