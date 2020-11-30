import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import AddBtn from '../add-btn/add-btn';
import GoToProfile from '../profile-bar/go-to-profile';
import Burger from '../burger/burger';

import * as S from './sidebar.styled';

export default function Sidebar() {
  const generalMenuData = [
    {
      name: 'HOME',
      slug: 'home',
      iconSrc: '/img/menu-home.svg'
    },
    {
      name: 'BROWSE',
      slug: 'browse',
      iconSrc: '/img/menu-search.svg'
    },
    {
      name: 'RADIO',
      slug: 'radio',
      iconSrc: '/img/menu-radio.svg'
    }
  ];
  const libraryMenuData = [
    {
      name: 'RECENTLY PLAYED',
      slug: 'recently-played',
      iconSrc: '/img/menu-history.svg'
    },
    {
      name: 'FAVORITE SONGS',
      slug: 'favorite-songs',
      iconSrc: '/img/menu-favorite.svg'
    },
    {
      name: 'ARTISTS',
      slug: 'artists',
      iconSrc: '/img/menu-artists.svg'
    },
    {
      name: 'ALBUMS',
      slug: 'albums',
      iconSrc: '/img/menu-albums.svg'
    }    
  ];
  const playlistMenuData = [
    {
      name: 'TOP POP',
      slug: 'top-pop'
    },
    {
      name: 'CHARTING NOW',
      slug: 'charting-now'
    },
    {
      name: 'ROMANCE SEASON',
      slug: 'romance-season'
    }
  ];
  const burgerIsOpen = useSelector(state => state.burger.burgerIsOpen);
  return (
    <S.Sidebar burgerIsOpen={burgerIsOpen}>
      <S.SidebarHeader id="sidebar-header">
        <Burger hideOnDesctop={true}/>
        <Logo />
        <GoToProfile hideOnDesctop={true}/>
      </S.SidebarHeader>
      <Menu items={generalMenuData}/>
      <S.Title>YOUR LIBRARY</S.Title>
      <Menu items={libraryMenuData}/>
      <S.Title>PLAYLISTS</S.Title>
      <Menu items={playlistMenuData}/>
      <AddBtn />
    </S.Sidebar>
  )
}
