import styled from 'styled-components'

 const Button = styled.button`
   background-color: transparent;
   color: var(--twitter);
   border: 1px solid var(--twitter);
   padding: 12px 20px;
   border-radius: 25px;
   font-weight: bold;
   font-size: 15px;
   cursor: pointer;
   outline: 0;
   &:hover {
      background-color: var(--twitter-dark-hover);
   }
`
export default Button