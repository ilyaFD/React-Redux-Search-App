import styled from 'styled-components';

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1199px) {
    padding: 0 15px;
    margin-bottom: 50px;
  }
`;

export const Sidebar = styled.div`
  width: 25%;
  background: #0F152B;
  padding: 50px 0;
  transition: height .3s;
  @media (max-width: 1199px) {
    overflow: auto;
    height: ${props => props.burgerIsOpen ? '100vh' : '83px'};
    width: 100%;
    padding: 15px 0;
  }
`;

export const Title = styled.div`
  color: #E3556D;
  padding: 5px 60px;
  margin-bottom: 20px;
  @media (max-width: 1199px) {
    padding: 5px 50px;
  }
`;


