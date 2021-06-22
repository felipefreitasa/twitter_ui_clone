import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`

export const Tab = styled.div`
width: 100%;
   text-align:center;
   margin-top: 10px;
   padding: 11px 0 15px;
   font-weight: bold;
   font-size: 15px;
   outline: 0;
   cursor: pointer;
   border-bottom: 2px solid transparent;
   color: var(--gray);
   transition: .1s ease-in-out;

   &:hover {
      background: var(--twitter-dark-hover);
      color: var(--twitter);

   }

   &:first-child{
      border-bottom: 2px solid var(--twitter);
      color: var(--twitter);

   }
`

export const Tweets = styled.div`
   display: flex;
   flex-direction: column;
   flex-shrink: 0;
`

export const TabContainer = styled.div`
   display: flex;
   width: 100%;
`
