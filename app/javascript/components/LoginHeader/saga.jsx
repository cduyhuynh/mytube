import React from "react"
import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { LOG_IN, SET_USER, SET_USER_LOADING } from './redux';
import { message } from 'antd';

function* login({ username, password })
{
  try {
    yield put({ type: SET_USER_LOADING });
    const response = yield call(axios.post, `/login`, { username, password });
    yield put({ type: SET_USER, data: { data: response.data.user } });
    message.success(response.data.message);
    localStorage.setItem('username', response.data.user.name);
  } catch (error) {
    message.error(error.response.data.message);
  }
}

export default function* () {
  yield takeLatest(LOG_IN, login);
}