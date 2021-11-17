import {
  put, fork, all, call,
} from 'redux-saga/effects';
import { NEWS_RECEIVED } from './constants';
import dashboardService from '../../services/dashboard';

export function* fetchNews() {
  const data = yield call(dashboardService.getNews);
  yield put({ type: NEWS_RECEIVED, data: data.data.articles });
}

export default function* dashboardSaga() {
  yield all([
    fork(fetchNews),
  ]);
}
