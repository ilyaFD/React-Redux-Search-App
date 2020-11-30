import * as type from '../types';

export function getArtists(searchVal) {
  return {
    type: type.GET_ARTISTS,
    payload: searchVal,
  }
}

export function setActiveArtist(artistDetails) {
  return {
    type: type.SET_ACTIVE_ARTIST,
    payload: artistDetails,
  }
}