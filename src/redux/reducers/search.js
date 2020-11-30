import * as type from '../types';

const initialState = {
  searchVal: '',
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case type.SET_SEARCH_VAL:
      return {
        ...state,
        searchVal: action.payload,
      }
    case type.RESET_SEARCH_VAL:
      return {
        ...state,
        searchVal: '',
      }
    default:
      return state;
    }
};