import { all } from 'redux-saga/effects';
import watchRepositories from '../watchers/repositoriesWatcher';

export default function* rootSaga() {
  yield all([watchRepositories()]);
}
