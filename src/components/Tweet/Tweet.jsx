import React from 'react'
import {
   Container,
   Body,
   Avatar,
   AvatarImg,
   Content,
   Header,
   Description,
   ImageContent,
   Dot,
   Icons,
   TweetImage,
   Status
} from './TweetStyles'
import Felipe from '../../assets/images/felipebanner.png'
import './Tweet.css'

const Tweet = (props) => {
   const { img, text } = props

   return (
      <Container>

         <Body>
            <Avatar>
               <AvatarImg src={Felipe} alt="Felipe Freitas" />
            </Avatar>
            <Content>
               <Header>
                  <strong>Felipe Freitas</strong>
                  <span>@felipefreitasa</span>
                  <Dot />
                  <time>27 de jul de 2021</time>
               </Header>
               <Description>{text}</Description>
               <ImageContent>
                  <TweetImage src={img} alt="Image Tweet" />
               </ImageContent>
               <Icons>
                  <Status>
                     <span class="material-icons icon1 md-24">
                        chat_bubble_outline
                     </span>
                  </Status>
                  <Status>
                     <span class="material-icons icon2 md-24">
                        repeat
                     </span>
                  </Status>
                  <Status>
                     <span class="material-icons icon3 md-24">
                        favorite_border
                     </span>
                  </Status>

                  <Status>
                     <span class="material-icons icon1 md-24">
                        file_upload
                     </span>
                  </Status>

                  <Status>
                     <span class="material-icons icon1 md-24">
                        bar_chart
                     </span>
                  </Status>

               </Icons>
            </Content>
         </Body>
      </Container>
   )
}

export default Tweet
