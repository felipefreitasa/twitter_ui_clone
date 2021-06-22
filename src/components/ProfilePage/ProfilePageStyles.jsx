import styled from 'styled-components'
import Button from '../Button/Button'


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100%;
   overflow-y: auto;
   scrollbar-width: none;
   :-webkit-scrollbar {
      display: none;
   }
`

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  position: relative;
`;

export const Teste = styled.img`
   width: 100%;
   height: min(33vw, 199px);
   object-fit: cover;
`

export const Avatar = styled.img`
   width: max(45px, min(135px, 22vw));
   height: max(45px, min(135px, 22vw));
   border: 3.75px solid var(--primary);
   background: var(--gray);
   border-radius: 50%;
   position: absolute;
   bottom: max(-60px, -10vw);
   left: 15px;
   object-fit: cover;
`

export const ProfileData = styled.div`
   padding: min(calc(10vw + 7px), 67px) 16px 0;
   display: flex;
   flex-direction: column;
   position: relative;
   > h1 {
      font-weight: bold;
      font-size: 19px
   }
   > h2 {
      font-weight: normal;
      font-size: 15px;
      opacity: 0.7;
      color: var(--gray);
   }
   > p {
      font-size: 15px;
      margin-top: 11px;
   }
   > ul {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;
      > li {
         font-size: 15px;
         color: var(--gray);
         display: flex;
         align-items: center;
         > span {
            margin-right: 5px;
         }
      }
   }
`

export const Followage = styled.div`
   display: flex;
   > span {
      font-size: 15px;
      color: var(--gray);

      & + span {
         margin-left: 20px;
      }
   }
`

export const EditButton = styled(Button)`
   position: absolute;
   top: 2vw;
   right: 7px;
   padding: 4px 16px;
   font-size: 13px;
   transition: .1s ease-in-out;
   @media (min-width: 320px){
      top: 10px;
      padding: 10px 19px;
      font-size: 15px;
   }
`
