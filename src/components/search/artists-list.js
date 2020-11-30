import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArtistsItem from './artists-item.js';
import { Link } from "react-router-dom";
import { setActiveArtist } from '../../redux/actions/artists';
import { resetSearchVal } from '../../redux/actions/search';
import * as S from './search.styled';

const ArtistsList = () => {
  const dispatch = useDispatch();
  const searchVal = useSelector(state => state.search.searchVal);
  const isLoading = useSelector(state => state.artists.loading);
  const error = useSelector(state => state.artists.error);
  const artists = useSelector(state => state.artists.artists);
  const hasItems = artists != null && artists.length > 0;
  const filtredArtists = hasItems ? artists.filter(artist => artist.strTeam.toLowerCase().indexOf(searchVal.toLowerCase()) === 0) : [];
  const hasFiltredItems = filtredArtists != null && filtredArtists.length > 0 && searchVal;


  const setActiveItemHendler = artist => {
    dispatch(setActiveArtist(artist));
    dispatch(resetSearchVal());
  }

  const renderHasItemsCondition = () => {
    if (hasFiltredItems) {
      return (
          <S.ArtistsList>
            {filtredArtists.map((artist, i) => {
              const itemName = artist.strTeam;
              const itemLogo = artist.strTeamBadge;
              const secondPart = itemName.slice(searchVal.length);
              const matchingPart = itemName.replace(secondPart, '');
              
              return <Link key={i} to="/single" onClick={() => setActiveItemHendler(artist)}><ArtistsItem matchingPart={matchingPart} secondPart={secondPart} itemLogo={itemLogo} /></Link>
            })}
          </S.ArtistsList>
      )
    } else {
      return <S.NoResult>No results</S.NoResult>
    }
  }

  const renderIsNoErrorsCondition = () => {
    return error ? <S.Error>{error}</S.Error> :  renderIsLoadingCondition();
  }

  const renderIsLoadingCondition = () => {
    return isLoading ? <S.Loading>Loading ...</S.Loading> :  renderHasItemsCondition();
  }

  return (
    <S.SearchResult>
      {renderIsNoErrorsCondition()}
    </S.SearchResult>
  )
}

export default ArtistsList;
