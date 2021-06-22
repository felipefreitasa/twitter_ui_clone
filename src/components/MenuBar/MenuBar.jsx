import React from 'react'
import { Container, TopSide, Imagem, MenuButton, BotSide, Avatar, ProfileData } from './MenuBarStyles'
import Button from '../Button/Button'
import './MenuBar.css'
import Felipe from '../../assets/images/felipebanner.png'
import TwitterIcon from '../../assets/icons/twitter3.png'

const MenuBar = () => {
   return (
      <Container>
         <TopSide>
            <img src={TwitterIcon} alt="Twitter Icon" className="twitter-icon" />
            <MenuButton>
               <span class="material-icons md-30">
                  home
               </span>
               <span>Página Inicial</span>
            </MenuButton>
            <MenuButton>
               <span class="material-icons md-30">
                  tag
               </span>
               <span>Explorar</span>

            </MenuButton>
            <MenuButton>
               <span class="material-icons md-30">
                  notifications
               </span>
               <span>Notificações</span>
            </MenuButton>
            <MenuButton>
               <span class="material-icons md-30">
                  email
               </span>
               <span>Mensagens</span>
            </MenuButton>
            <MenuButton>
               <span class="material-icons md-30">
                  bookmark
               </span>
               <span>Itens salvos</span>

            </MenuButton>
            <MenuButton>
               <span class="material-icons md-30">
                  sort
               </span>
               <span>Listas</span>

            </MenuButton>
            <MenuButton>
               <span class="material-icons md-30">
                  perm_identity
               </span>
               <span>Perfil</span>

            </MenuButton>

            <MenuButton>
               <span class="material-icons md-30">
                  more_horiz
               </span>
               <span>Mais</span>

            </MenuButton>
            <Button>
               <span>Tweetar</span>
               <span class="material-icons md-30">
                  edit
               </span>
            </Button>
         </TopSide>

         <BotSide>
            <Avatar>
               <Imagem src={Felipe} alt="Felipe" />
            </Avatar>
            <ProfileData>
               <strong>Felipe Freitas</strong>
               <span>@felipefreitasa</span>
            </ProfileData>
            <span class="material-icons">
               more_horiz
            </span>
         </BotSide>
      </Container>
   )
}

export default MenuBar
