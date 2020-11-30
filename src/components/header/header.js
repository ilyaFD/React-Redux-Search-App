import React from 'react';
import Search from '../search/search';
import ProfileBar from '../profile-bar/profile-bar';
import * as S from './header.styled';

const Header = () => {
  return (
    <S.Header>
      <Search />
      <ProfileBar displayOnlyDesctop={true} />
    </S.Header>
  )
}

export default Header;
