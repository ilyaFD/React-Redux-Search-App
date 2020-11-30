import React from 'react';
import * as S from './search.styled';

const ArtistsItem = ({ matchingPart, secondPart, itemLogo }) => {
  return (
    <S.ArtistsItem>
      <S.ArtistsLogo src={itemLogo} alt="Artist Logo"/>
      <S.ArtistsName>
        <S.ArtistsMatchingNamePart>{matchingPart}</S.ArtistsMatchingNamePart>
        <S.ArtistsSecondNamePart>{secondPart}</S.ArtistsSecondNamePart>
      </S.ArtistsName>
    </S.ArtistsItem>
  )
}

export default ArtistsItem;
