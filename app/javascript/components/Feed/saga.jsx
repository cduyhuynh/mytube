import React from "react"
import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { FEED_LISTING, SET_FEED, SET_FEED_LOADING } from './redux';

function* list({page})
{
  try {
    yield put({ type: SET_FEED_LOADING });
    const response = yield call(axios.get, `/react/videos/index`, { params: { page: page }});
    yield put({ type: SET_FEED, data: response.data.videos, page: page + 1, end_of_feed:  response.data.videos.length == 0});
  } catch (error) {
    console.error(error.response);
  }
}

export default function* () {
  yield takeLatest(FEED_LISTING, list);
}