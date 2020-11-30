import React from 'react';
import MenuItem from './menu-item';
import * as S from './menu.styled';

/* items = [
  {
    name: name,
    slug: slug,
    iconSrc: iconSrc
  }
] */

const renderHasItemsCondition = (items, hasItems) => {
  if (hasItems) {
    return (
      <S.Menu>
        {items.map((item, i) => (<MenuItem key={ i } name={ item.name } slug={ item.slug } iconSrc={ item.iconSrc } />))}
      </S.Menu>
    )
  }
}

const Menu = ({ items }) => {
  const hasItems = !!items.length;
  return renderHasItemsCondition(items, hasItems);
}

export default Menu;
