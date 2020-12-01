import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getArtists, setActiveArtist } from '../../redux/actions/artists';
import { setSearchVal, resetSearchVal } from '../../redux/actions/search';
import * as S from './search.styled';

const SearchField = () => {
  const history = useHistory();
  const searchVal = useSelector(state => state.search.searchVal);
  const isLoading = useSelector(state => state.artists.loading);
  const dispatch = useDispatch();
  const artists = useSelector(state => state.artists.artists);
  const hasItems = artists != null && artists.length > 0;
  const filtredArtists = hasItems ? artists.filter(artist => artist.strTeam.toLowerCase().indexOf(searchVal.toLowerCase()) === 0) : [];
  const hasFiltredItems = filtredArtists != null && filtredArtists.length > 0 && searchVal;
  const postfix = hasFiltredItems ? filtredArtists[0].strTeam.slice(searchVal.length) : '';
  const postfixHasSpace = postfix.substr(0, 1) === ' ';
  const searchValHasSpace = searchVal.substr(searchVal.length - 1, searchVal.length) === ' ';

  const searchHendler = e => {
    dispatch(setSearchVal(e.target.value));
    if(!isLoading) {
      dispatch(getArtists([e.target.value, isLoading]));
    } else {
      dispatch(getArtists([e.target.value, isLoading]));
    }
  }
  const handleKeyDown = e => {
    if(e.key === 'Enter' && hasFiltredItems){
      dispatch(setActiveArtist(filtredArtists[0]));
      history.push('/single');
      dispatch(resetSearchVal());       
    }
  }

  return (
    <S.SearchFieldWrap>
      <S.SearchField onKeyDown={e => handleKeyDown(e)} onChange={e => searchHendler(e)} value={searchVal}/>
      <S.SearchFieldVal>
        <S.SearchFieldInputVal>{searchVal + (searchValHasSpace ? '\u00A0' : '') }</S.SearchFieldInputVal>
        <S.SearchFieldPostfix>{(postfixHasSpace ? '\u00A0' : '') + postfix}</S.SearchFieldPostfix>
      </S.SearchFieldVal>
    </S.SearchFieldWrap>
  )
}

export default SearchField;
