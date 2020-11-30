import React from 'react';
import { useSelector } from 'react-redux';

import ArtistsList from './artists-list';
import SearchField from './search-field';
import * as S from './search.styled';

const Search = () => {
  const searchVal = useSelector(state => state.search.searchVal);

  return (
    <S.Search>
      <SearchField/>
      {searchVal.length > 0 && <ArtistsList/>}
    </S.Search>
  )
}

export default Search;
