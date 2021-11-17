import { all, fork } from 'redux-saga/effects';
import dashboardSaga from './modules/dashboard/sagas';

const RootSagas = function* _() {
  yield all([
    fork(dashboardSaga),
  ]);
};

export default RootSagas;
