import { call, all, put, takeEvery, select } from 'redux-saga/effects';
import * as type from '../types';

const apiUrl = 'https://www.thesportsdb.com/api/v1/json/1/';

const searchRequestFunc = (apiUrl, searchVal) => {
  const searchParameters = 'searchteams.php?t=';
  return apiUrl + searchParameters + searchVal;
}

const runSearchRequest = (apiUrl, searchVal, isLoading) => {
  const searchRequest = searchRequestFunc(apiUrl, searchVal);
  return fetch(searchRequest)
    .then(response => response.json())
    .catch(error => {throw error});
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => {
      resolve()
    }, ms))
}


function* fetchSearchRequest(action) {
  let [searchVal, isLoading] = action.payload;
  if (!isLoading) {
    try {
      let artists = [];
      let runSearchValWatch = true;
      while (runSearchValWatch) {
          artists = yield all([
          call(runSearchRequest, apiUrl, searchVal, isLoading),
          call(delay, 1000),
        ]);
        const state = yield select();
        const newSearchVal = state.search.searchVal;
        runSearchValWatch = !(searchVal === newSearchVal);
        searchVal = newSearchVal;
      }
      yield put({type: type.GET_ARTISTS_SUCCES, artists: artists[0].teams});
    } catch(e) {
      yield put({type: type.GET_ARTISTS_FAILED, message: e.message});
    }
  }
}

function* artistsSaga() {
  yield takeEvery('GET_ARTISTS', fetchSearchRequest);
}

export default artistsSaga;