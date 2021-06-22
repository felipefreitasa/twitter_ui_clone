import styled from 'styled-components'

export const Container = styled.div`
   display: none;
   @media (min-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: sticky;
      top: 0;
      left: 0;
      padding: 9px 19px 20px;
      max-height: 100vh;
      overflow-y: auto;
   }
`

export const TopSide = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (min-width: 1280px) {
      align-items: flex-start;
   }
`

export const MenuButton = styled.button`
   display: flex;
   align-items: center;
   flex-shrink: 0;
   transition: .1s ease-in-out ;
   > span {
      padding: 0 10px;
   }
   &:nth-child(8) span {
      color:var(--twitter);
   }
   > span + span {
      padding-left: 0;

      display: none;
      transition: .1s ease-in-out ;
   }
   @media (min-width: 1280px) {
      > span {
         padding-left: 10px;
      }

      > span + span{
         display: inline;
         margin-left: 19px;
         font-weight: bold;
         font-size: 19px;
      }
      padding-right: 15px;

   }
   padding: 8.25px 0;
   outline: 0;
   
   & + button:last-child  {
      margin-top: 33px;
      width: 40px;
      height: 40px;
      background:var(--twitter);
      > span {
         display: none;
      }

      > span + span {
         display: flex;
         width: 100%;
         height: 100%;
         align-items: center;
         justify-content: center;
      }
      @media (min-width: 1280px) {
         width: 100%;
         height: unset;
         > span {
            display: inline;
         }

         > span + span {
            display: none;
         }
      }
   }
   cursor: pointer;
   border-radius: 25px;
   
   &:hover{
      background: var(--twitter-dark-hover);
      > span {
         color: var(--twitter)
      }
      > span + span {
         color: var(--twitter);
      }
   }
   
   
`

export const BotSide = styled.div`
   margin-top: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 20px;
   border-radius: 100px;
   transition: .2s ease-in-out ;
   &:hover {
      cursor: pointer;
      background: var(--twitter-dark-hover);
   }
   > span {
         display: none;
      }
   @media (min-width: 1280px){
      > span {
         display: flex;
         margin-left: 20px;
      }
   }
`
export const Imagem = styled.img`
   object-fit: cover;
   width: 39px;
   height: 39px;
   border-radius: 50%;
`
export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background: var(--gray);
`
export const ProfileData = styled.div`
   display: none;
   @media (min-width: 1280px){
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      font-size: 14px;
      > span {
         color: var(--gray);
      }
   }
`
