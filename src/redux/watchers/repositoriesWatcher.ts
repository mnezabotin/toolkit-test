import { takeLatest } from 'redux-saga/effects';
import { getRepositoriesSaga } from '../sagas/repositoriesSaga';

import * as types from '../types';

export default function* watchRepositories() {
  // @ts-ignore
  yield takeLatest(types.GET_REPOSITORIES_REQUEST, getRepositoriesSaga);
}
