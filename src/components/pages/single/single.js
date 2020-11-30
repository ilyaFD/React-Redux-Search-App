import React from 'react';
import * as S from './single.styled';

const SingleArtist = ({data}) => {
  const { strTeamBadge, strTeam, strDescriptionEN } = data;
  return (
    <S.SingleArtist>

      <S.SingleArtistPart>
        <S.SingleArtistDescription>{ strDescriptionEN ? strDescriptionEN : 'No description'}</S.SingleArtistDescription>
      </S.SingleArtistPart>

      <S.SingleArtistPart>
        <S.SingleArtistName>{ strTeam ? strTeam : 'No Title'}</S.SingleArtistName>
        <S.SingleArtistLogo src={ strTeamBadge ? strTeamBadge : './img/pict.svg' } alt={ strTeam } />
      </S.SingleArtistPart>

    </S.SingleArtist>
  )
}

export default SingleArtist;
