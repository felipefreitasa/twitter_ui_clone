import React from 'react'
import { Container, Item, Title, Title2} from './ListStyles'


const List = (props) => {
   const { title, element } = props

   return (
      <Container>
        
            <Item>
               <Title>{title}</Title>
            </Item>
            <Item>
               <Title2>{element}</Title2>
            </Item>
      
      </Container>
   )
}

export default List
