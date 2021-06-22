import styled from 'styled-components'

export const Container = styled.div`
   display: none;
   @media (min-width: 1000px) {
      display: flex;
      flex-direction: column;
      width: min(399px, 100%);
   }
`

export const SearchWrapper = styled.div`
   padding: 10px 24px;
   width: min(399px, 100%);
   position: fixed;
   top: 0;
   z-index: 2;
   background: var(--primary);
   max-height: 57px;
`

export const SearchInput = styled.input`
   width: 100%;
   height: 39px;
   font-size: 14px;
   padding: 0 10px 0 52px;
   border-radius: 19px;
   background: var(--search);
   outline: 0;
   &::placeholder{
      color: var(--gray);
   }
   &:focus {
      border: 1px solid var(--twitter);
   }
`

export const InputIcon = styled.div`
   position: relative;
   top: -33px;
   left: 15px;
   z-index: 1;
`

export const Body = styled.div`
   display: flex;
   flex-direction: column;
   padding: 57px 24px 200px;
   
   position: sticky;
   top: 0;
   > div + div{
      margin-top: 15px;
   }
`