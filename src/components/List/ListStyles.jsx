import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 0;
  
  & + div {
    border-top: 1px solid var(--outline);
  }
  &:first-child {
    padding-top: 13px;
  }
  
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
  padding-left: 10px;
`;

export const Title2 = styled.div`
padding:0  3px;
  >div {
    border-top: 1px solid var(--outline);
  } 
  > div:first-child {
    border-top: 0;
  }
`;