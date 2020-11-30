import styled from 'styled-components';

export const Burger = styled.div`
  display: ${props => props.hideOnDesctop ? 'none' : 'block' };
  @media (max-width: 1199px) {
    display: block;
  }
`;
export const BurgerWrap = styled.div`
  width: 25px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #8B8E97;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: ${props => props.burgerIsOpen ? '9px' : ' 0' };
      ${props => props.burgerIsOpen ? 'width: 0%;' : '' }
      ${props => props.burgerIsOpen ? 'left: 50%;' : '' }
    }
    &:nth-child(2) {
      ${props => props.burgerIsOpen ? 'transform: rotate(45deg);' : '' }
    }
    &:nth-child(3) {
      ${props => props.burgerIsOpen ? 'transform: rotate(-45deg);' : '' }
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }
    &:nth-child(4) {
      bottom: 0;
      ${props => props.burgerIsOpen ? 'top: 9px;' : '' }
      ${props => props.burgerIsOpen ? 'width: 0%;' : '' }
      ${props => props.burgerIsOpen ? 'left: 50%;' : '' }
    }
  }
`;


