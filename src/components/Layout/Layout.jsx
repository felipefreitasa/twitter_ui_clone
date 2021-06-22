import React from 'react'
import Main from '../Main/Main'
import MenuBar from '../MenuBar/MenuBar'
import SideBar from '../SideBar/SideBar'
import {Container, Wrapper} from './LayoutStyles'

const Layout = () => {
   return (
      <Container>
         <Wrapper>
            <MenuBar />
            <Main />
            <SideBar />
         </Wrapper>
      </Container>
   )
}

export default Layout
