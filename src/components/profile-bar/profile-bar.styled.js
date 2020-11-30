
import styled from 'styled-components';

export const ProfileBar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1199px) {
    ${props => props.displayOnlyDesctop ? 'display: none' : '' };
  }
  & > * {
    margin-right: 35px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
export const SettingsIcon = styled.img``;
export const Notifications = styled.div``;
export const NotificationsIcon = styled.img``;
export const GoToProfileAvatar = styled.img``;
export const GoToProfile = styled.div`
  display: ${props => props.hideOnDesctop ? 'none' : 'block' };
  @media (max-width: 1199px) {
    display: block;
  }
`;