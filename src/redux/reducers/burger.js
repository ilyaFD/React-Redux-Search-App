import * as type from '../types';

const initialState = {
  burgerIsOpen: false,
}

export default function burger(state = initialState, action) {
  switch (action.type) {
    case type.TOGGLE_BURGER:
      return {
        ...state,
        burgerIsOpen: !state.burgerIsOpen,
      }
    default:
      return state;
    }
};