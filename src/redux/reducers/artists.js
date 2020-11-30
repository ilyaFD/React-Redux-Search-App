import * as type from '../types';

const initialState = {
  loading: false,
  error: null,
  activeArtist: {},
  artists: [],
}

export default function artists(state = initialState, action) {
  switch (action.type) {
    case type.GET_ARTISTS:
      return {
        ...state,
        loading: true
      }
    case type.GET_ARTISTS_SUCCES:
      return {
        ...state,
        loading: false,
        artists: action.artists,
      }
    case type.GET_ARTISTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    case type.SET_ACTIVE_ARTIST:
      return {
        ...state,
        activeArtist: action.payload,
      }
    default:
      return state;
    }
};