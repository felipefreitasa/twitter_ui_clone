import React from 'react'
import { Container, Tab, Tweets, TabContainer } from './FeedStyles'
import Tweet from '../Tweet/Tweet'
import Nlw from '../../assets/images/nlw.png'
import Meme1 from '../../assets/images/meme1.jpg'
import Meme3 from '../../assets/images/meme3.jpg'
import Meme4 from '../../assets/images/meme4.jpg'
import Meme5 from '../../assets/images/meme5.jpg'

const Feed = () => {
   return (
      <Container>
         <TabContainer>
            <Tab>Tweets</Tab>
            <Tab>Tweets e repostas</Tab>
            <Tab>Mídia</Tab>
            <Tab>Curtidas</Tab>
         </TabContainer>
         <Tweets>
            <Tweet img={Meme3} text={'Tururu...'} />
            <Tweet img={Nlw} text={'Semana de muito aprendizado na Next Level Week da Rocketseat!'} />
            <Tweet img={Meme1} text={'"Programador tem que saber muita matemática"'} />
            <Tweet img={Meme4} text={'Stonks'} />
            <Tweet img={Meme5} text={'Elon Musk diz "doge" e preço da criptomoeda dispara'} />
         </Tweets>
      </Container>
   )
}

export default Feed
