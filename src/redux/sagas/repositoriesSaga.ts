import { put, call } from 'redux-saga/effects';
import { getRepositories } from '../api';
import * as types from '../types';
// @ts-ignore
export function* getRepositoriesSaga({ payload }) {
  try {
    // @ts-ignore
    const data = yield call(getRepositories, payload);
    yield put({ type: types.GET_REPOSITORIES_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.GET_REPOSITORIES_ERROR, error });
  }
}
