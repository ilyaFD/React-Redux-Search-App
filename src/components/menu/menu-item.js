import React from 'react';
import * as S from './menu.styled';
import { Link } from "react-router-dom";

const ArtistsItem = ({ name, iconSrc, slug }) => {  
  return (
    <S.MenuItem>
      <Link to={ slug }>
        <S.MenuItemContent>
          { iconSrc ? <S.MenuItemIcon src={ iconSrc } name={ name } /> : null }
          <S.MenuItemName >{ name }</S.MenuItemName>
        </S.MenuItemContent>
      </Link>
    </S.MenuItem>
  )
}

export default ArtistsItem;
