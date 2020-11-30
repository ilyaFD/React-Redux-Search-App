import { all } from 'redux-saga/effects';
import artistsSaga from './artists-saga';

export default function* rootSaga() {
  yield all([
    artistsSaga(),
  ])
}