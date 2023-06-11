import { all } from 'redux-saga/effects';
import userWatcher from '../components/LoginHeader/saga';

export default function* saga() {
  yield all([
    userWatcher(),
  ]);
}
