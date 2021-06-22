import React from 'react'
import List from '../List/List'
import News from '../News/News'
import FollowSuggestion from '../FollowSuggestion/FollowSuggestion'
import {
   Container,
   SearchWrapper,
   SearchInput,
   Body,
   InputIcon
} from './SideBarStyles'
import People1 from '../../assets/images/people1.jpg'
import People2 from '../../assets/images/people2.jpg'
import People3 from '../../assets/images/people3.jpg'
import People4 from '../../assets/images/people4.jpg'


const SideBar = () => {
   return (
      <Container>
         <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <InputIcon>
               <span class="material-icons">
                  search
               </span>
            </InputIcon>
         </SearchWrapper>
         <Body>
            <List
               title={'Talvez você curta'}
               element={[
                  <FollowSuggestion
                     img={People1}
                     name="João Marcos"
                     nickname="@jmreal_"
                  />,
                  <FollowSuggestion
                     img={People2}
                     name="Luana Paiva"
                     nickname="@lupaiva"
                  />,
                  <FollowSuggestion
                     img={People3}
                     name="Douglas Ferreiro"
                     nickname="@douglasferreiro"
                  />,
                  <FollowSuggestion
                     img={People4}
                     name="Eldair Nicolas"
                     nickname="@eldnicolas"
                  />,
               ]}
            />
            <List
               title={'O que está acontencendo'}
               element={[
                  <News title={'Ceará: as últimas notícias sobre a pandemia'} text={'COVID-19 · AO VIVO'} />,
                  <News title={'Diana'} text={'Video games · Assunto do Momento'}/>,
                  <News title={'God of War'} text={'Gaming · Assunto do Momento'}/>,
                  
               ]}
            />
         </Body>
      </Container>
   )
}

export default SideBar
