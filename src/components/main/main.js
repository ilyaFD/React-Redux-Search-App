import React from 'react';
import Header from '../header/header';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './main.styled';
import SingleArtist from '../pages/single/single';
import Home from '../pages/home/home';

const Main = () => {
  const activeArtist = useSelector(state => state.artists.activeArtist);

  return (
    <S.Main>
      <Header />
      <Switch>
        <Route path="/single"  children={<SingleArtist data={activeArtist}/>} />
        <Route path="/home" children={<Home />} />
      </Switch>
    </S.Main>
  )
}

export default Main;
