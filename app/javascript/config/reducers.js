import { combineReducers } from 'redux';
import user from '../components/LoginHeader/redux';
import feed from '../components/Feed/redux';

export default combineReducers({ user, feed });
