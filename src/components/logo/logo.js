import React from 'react';
import { Link } from "react-router-dom";
import * as S from './logo.styled';


const Logo = () => {
  return (
    <S.Logo>
      <Link to="/">
        <S.LogoImage src="/img/logo.svg" alt="Logo" />
      </Link>
    </S.Logo>
  )
}

export default Logo;
