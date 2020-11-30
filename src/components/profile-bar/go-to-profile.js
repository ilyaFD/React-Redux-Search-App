import React from 'react';
import { Link } from "react-router-dom";

import * as S from './profile-bar.styled';

const GoToProfile = ({hideOnDesctop}) => {
  return (
    <S.GoToProfile hideOnDesctop={hideOnDesctop}>
      <Link to="/profile" >
        <S.GoToProfileAvatar src="/img/user.png" alt="Avatar"/>
      </Link>
    </S.GoToProfile>
  )
}

export default GoToProfile;
