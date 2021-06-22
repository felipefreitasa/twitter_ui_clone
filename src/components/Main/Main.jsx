import React from 'react'
import { Container, Header, ProfileInfo, BottomMenu } from './MainStyles'
import ProfilePage from '../ProfilePage/ProfilePage'
import './Main.css'

const Main = () => {
   return (
      <Container>
         <Header>
            <button>
               <span class="material-icons icon">
                  arrow_back
               </span>
            </button>

            <ProfileInfo>
               <strong>Felipe Freitas</strong>
               <span>500 Tweets</span>
            </ProfileInfo>
         </Header>

         <ProfilePage />

         <BottomMenu>
            <span class="material-icons md-30">
               home
            </span>            
            <span class="material-icons md-30">
               search
            </span>            
            <span class="material-icons md-30">
               notifications
            </span>            
            <span class="material-icons md-30">
               mail
            </span>            
           
         </BottomMenu>

      </Container>
   )
}

export default Main
