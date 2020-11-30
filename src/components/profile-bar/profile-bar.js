import React from 'react';

import Settings from './settings';
import Notifications from './notifications';
import GoToProfile from './go-to-profile';
import * as S from './profile-bar.styled';

const ProfileBar = ({displayOnlyDesctop}) => {
  return (
    <S.ProfileBar displayOnlyDesctop={displayOnlyDesctop}>
      <Settings />
      <Notifications />
      <GoToProfile />
    </S.ProfileBar>
  )
}

export default ProfileBar;
