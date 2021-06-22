import React from 'react'
import './ProfilePageStyles'
import { Container, Teste, Banner, Avatar, ProfileData, Followage, EditButton } from './ProfilePageStyles'
import Feed from '../Feed/Feed'
import Felipe from '../../assets/images/felipebanner.png'
import Nlw from '../../assets/images/nlw.png'
import './ProfilePage.css'

const ProfilePage = () => {
   return (
      <Container>
         <Banner>
            <Teste src={Nlw} alt="Nlw Banner" />
            <Avatar src={Felipe} alt="Felipe" />
         </Banner>

         <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
            <h1>Felipe Freitas</h1>
            <h2>@felipefreitasa</h2>
            <p>Front-end developer</p>
            <ul>
               <li>
                  <span class="material-icons md-20">
                     fmd_good
                  </span>Fortaleza-CE, Brasil
               </li>
               <li>
                  <span class="material-icons md-20">
                     cake
                  </span>Nascido em 15 de fevereiro de 2002
               </li>
            </ul>
            <Followage>
               <span>seguindo <strong>94</strong></span>
               <span><strong>600</strong> seguidores</span>
            </Followage>
         </ProfileData>

         <Feed />
      </Container>
   )
}

export default ProfilePage
