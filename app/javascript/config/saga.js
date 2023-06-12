import { all } from 'redux-saga/effects';
import userWatcher from '../components/LoginHeader/saga';
import feedWatcher from '../components/Feed/saga';

export default function* saga() {
  yield all([
    userWatcher(),
    feedWatcher(),
  ]);
}
