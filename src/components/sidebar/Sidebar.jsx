import React, { useState } from 'react'
import { FixedTop, SidebarWrapper, StyledMenu } from './styled'
import { Logo, Wrapper } from '../../styled'
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(fas)


// const Menu = ({open}) => {
//   return (
//     <StyledMenu open={open}></StyledMenu>
//   )
// }

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <SidebarWrapper open={open}>
      <FixedTop>
        <Wrapper row>
          <Logo src={logo}/>
          Diploma
        </Wrapper>
        <FontAwesomeIcon
          icon={["fas", "thumbtack"]}
          style={{color: "#fff", cursor: 'pointer'}}
          onClick={() => setOpen(!open)}
        />
      </FixedTop>
      {/*<Menu open={open} setOpen={setOpen}/>*/}
    </SidebarWrapper>
  )
}