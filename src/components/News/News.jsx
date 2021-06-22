import React from 'react'
import {Container} from './NewsStyles'

const News = (props) => {
   const {text, text2, title} = props

   return (
      <Container>
         <span>{text}</span>
         <strong>{title}</strong>
         <span>{text2}</span>
      </Container>
   )
}

export default News
