
import styled from 'styled-components';

export const Menu = styled.ul`
  margin-bottom: 50px;
`;
export const MenuItem = styled.li`
  padding: 5px 60px;
  margin-bottom: 20px;
  @media (max-width: 1199px) {
    padding: 5px 50px;
  }
`;
export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuItemName = styled.p`
  color: ${props => props.active ? '#5ABC61' : 'white' };
`;
export const MenuItemIcon = styled.img`
  margin-right: 25px;
  filter: ${props => props.active ? 'invert(0.5) sepia(1) hue-rotate(70deg)' : 'none' };
`;