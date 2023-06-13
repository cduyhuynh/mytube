import React from "react"
import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { LOG_IN, ME, SET_USER, SET_USER_LOADING } from './redux';
import { message } from 'antd';

function* login({ email, password })
{
  try {
    yield put({ type: SET_USER_LOADING });
    const response = yield call(axios.post, `/login`, { email, password });
    yield put({ type: SET_USER, data: { data: response.data.user } });
    message.success(response.data.message);
  } catch (error) {
    message.error(error.response.data.message);
  }
}

function* me()
{
  try {
    yield put({ type: SET_USER_LOADING });
    const response = yield call(axios.get, `/me`);
    console.log('me', response);
    yield put({ type: SET_USER, data: { data: response.data.user } });
  } catch (error) {
    console.log(error);
    message.error(error.response.data.message);
  }
}

export default function* () {
  yield takeLatest(LOG_IN, login);
  yield takeLatest(ME, me);
}