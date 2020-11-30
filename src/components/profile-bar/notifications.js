import React from 'react';
import { Link } from "react-router-dom";

import * as S from './profile-bar.styled';

const Notifications = () => {
  return (
    <Link to="/notifications">
      <S.Notifications>
        <S.NotificationsIcon src="/img/notifications.svg" alt="Notifications"/>
      </S.Notifications>
    </Link>
  )
}

export default Notifications;
