import styled from 'styled-components';

export const SingleArtist = styled.div`
  padding: 10px 50px 50px;
  display: flex;
  flex-wrap: wrap;
`;
export const SingleArtistPart = styled.div`
  width: 50%;
  @media (max-width: 1199px) {
    &:first-child {
      width: 60%;
    }
    &:last-child {
      width: 40%;
    }
  }
  @media (max-width: 767px) {
    &:first-child {
      width: 100%;
      order: 2;
    }
    &:last-child {
      width: 100%;
      order: 1;
    }
  }
`;
export const SingleArtistDescription = styled.p`
  padding-right: 100px;
  @media (max-width: 1199px) {
    padding-right: 30px;
  }
  @media (max-width: 767px) {
    padding-right: 0;
  }
`;
export const SingleArtistName = styled.p`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    text-align:center;
  }
`;
export const SingleArtistLogo = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  @media (max-width: 1199px) {
    height: auto;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;