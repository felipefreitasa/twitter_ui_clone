import React from 'react'
import { Container, Avatar, AvatarImg, Info, FollowButton } from './FollowSuggestionStyles'


const FollowSuggestion = (props) => {
   const { name, nickname, img } = props

   return (
      <Container>
         <div>
            <Avatar>
               <AvatarImg src={img} alt="Image Follow Suggestion" />
            </Avatar>
            <Info>
               <strong>{name}</strong>
               <span>{nickname}</span>
            </Info>
         </div>
         <FollowButton outlined>Seguir</FollowButton>

      </Container>
   )
}

export default FollowSuggestion
