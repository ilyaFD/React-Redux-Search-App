import React from 'react';
import { Link } from "react-router-dom";

import * as S from './profile-bar.styled';

const Settings = () => {
  return (
    <Link to="/settings">
      <S.SettingsIcon src="/img/settings.svg" alt="Settings"/>
    </Link>
  )
}

export default Settings;
