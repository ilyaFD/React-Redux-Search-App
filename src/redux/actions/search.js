import * as type from '../types';

export function setSearchVal(val) {
  return {
    type: type.SET_SEARCH_VAL,
    payload: val,
  }
}

export function resetSearchVal() {
  return {
    type: type.RESET_SEARCH_VAL
  }
}