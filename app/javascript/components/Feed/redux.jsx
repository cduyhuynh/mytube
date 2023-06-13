export const FEED_LISTING = 'FEED_LISTING';
export const SET_FEED = 'SET_FEED';
export const SET_FEED_LOADING = 'SET_FEED_LOADING';
export const FEED_OVER = 'SET_FEED_LOADING';

const INITIAL_STATE = {
  loading: true,
  data: [],
  page: 0,
  end_of_feed: false
}

export default function (state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case SET_FEED_LOADING:
      return { ...state, loading: true };
    case SET_FEED:
      state.data.push(...action.data);
      action.data = state.data;
      return { ...state, ...action, loading: false };
    default:
      return state;
  }
}

export const list = (page) => ({ type: FEED_LISTING, page });
