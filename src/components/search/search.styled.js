import styled from 'styled-components';

export const ArtistsList = styled.ul``;
export const ArtistsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: transparent;
  &:hover {
    background-color: #0F152B;
  }
`;
export const ArtistsName = styled.p``;
export const ArtistsMatchingNamePart = styled.span`
  color: #e3556d;
`;
export const ArtistsSecondNamePart = styled.span`
  color: #8b8e97;
`;
export const SearchFieldInputVal = styled.div`
  color: transparent;
`;
export const SearchFieldPostfix = styled.div`
  color: #8b8e97;
`;
export const ArtistsLogo = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 25px;
`;

export const SearchFieldVal = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  padding: 10px 10px 10px 35px;
`;
export const Search = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  @media (max-width: 1199px) {
    max-width: 100%;
  }
`;
export const SearchFieldWrap = styled.div`
  position: relative;
`;
export const SearchField = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #8B8E97;
  border-radius: 6px;
  color: #e3556d;
  padding: 10px 10px 10px 35px;
  font-weight: 900;
  background-image: url(./img/search.svg);
  background-repeat: no-repeat;
  background-position: 10px 50%;
  background-size: 15px auto;
`;
export const SearchResult = styled.div`
  width: 100%;
  background: #181E30;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  position: absolute;
  left: 0;
  top: 110%;
  padding: 10px 0;
  max-height: 375px;
  max-height: 375px;
  overflow: auto;
`;
export const Loading = styled.div`
  padding: 0 10px;
`;
export const NoResult = styled.div`
  padding: 0 10px;
`;
export const Error = styled.div``;