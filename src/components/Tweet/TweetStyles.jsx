import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 14px 16px;
   border-bottom: 1px solid var(--outline);
   max-width: 100%;
`

export const Retweeted = styled.div`
   display: flex;
   align-items: center;
   font-size: 13px;
   > span {
      color: var(--gray);
   }
  `

export const Body = styled.div`
   display: flex;
   margin-top: 3px;
   position: relative;
`

export const Avatar = styled.div`
   width: 49px;
   height: 49px;
   border-radius: 50%;
   flex-shrink:0;
   background: var(--gray);
   position: absolute;
   top: 0;
   left: 0;
`

export const AvatarImg = styled.img`
   width: 49px;
   height: 49px;
   border-radius: 50%;
   position: absolute;
   top: 0;
   left: 0;
   object-fit: cover;
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-top: 2px;
   padding-left: 59px;
`

export const Header = styled.div`
   display: flex;
   align-items: center;
   font-size: 15px;
   white-space: nowrap;
   > strong {
      margin-right: 5px;
   }
   > span, time {
      color: var(--gray);
   }
   > strong, span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }
`

export const Description = styled.p`
   margin-top: 4px;
   font-size:  16px;
`

export const ImageContent = styled.div`
   margin-top: 12px;
   width: 100%;
   height: min(285px, max(175px, 41vw));
   border-radius: 14px;
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }
`
export const TweetImage = styled.img`
   margin-top: 12px;
   width: 100%;
   height: min(285px, max(175px, 41vw));
   border-radius: 14px;
   cursor: pointer;
   object-fit: cover;
`

export const Dot = styled.div`
   background: var(--gray);
   width: 2px;
   height: 2px;
   margin: 0 10px;
`

export const Icons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   margin: 11px auto 0;
   width: 100%;
   
   @media (min-width: 330px) {
      width: 63%;
   }
   > div {
      cursor: pointer;
      &:hover {
         opacity: 0.7;
         
      }
   }
`

export const Status = styled.div`
   display: flex;
   align-items: center;
   font-size: 14px;
`