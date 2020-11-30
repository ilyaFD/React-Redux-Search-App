import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglerBurger } from '../../redux/actions/burger';
import * as S from './burger.styled';

const Burger = ({hideOnDesctop}) => {
  const dispatch = useDispatch();
  const burgerIsOpen = useSelector(state => state.burger.burgerIsOpen);
  const burgerHendler = () => {
    dispatch(togglerBurger());
  }
  return (
    <S.Burger hideOnDesctop={hideOnDesctop} onClick={() => burgerHendler()} >
      <S.BurgerWrap burgerIsOpen={burgerIsOpen}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </S.BurgerWrap>
    </S.Burger>
  )
}

export default Burger;
