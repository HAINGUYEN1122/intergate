import {
  put, takeEvery, all,
} from 'redux-saga/effects';

export function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then((response) => response.json());
  yield put({ type: 'NEWS_RECEIVED', json: json.articles });
}

export function* actionWatcher() {
  yield takeEvery('GET_NEWS', fetchNews);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
