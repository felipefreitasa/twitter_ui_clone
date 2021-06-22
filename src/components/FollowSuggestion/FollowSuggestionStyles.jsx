import styled from 'styled-components';

import Button from '../Button/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--outline);
  padding: 5px 5px;
  > div {
    display: flex;
    align-items: center;
  }
  &:first-child {
   border-top:0;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
`;

export const AvatarImg = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
  transition: .1s ease-in-out;

`;