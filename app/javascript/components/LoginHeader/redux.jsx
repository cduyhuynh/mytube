export const LOG_IN = 'LOG_IN';
export const ME = 'ME';
export const SET_USER = 'SET_USER';
export const SET_USER_LOADING = 'SET_USER_LOADING';

const INITIAL_STATE = {
  loading: true,
  data: {},
}

export default function (state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case SET_USER:
      return { ...state, ...action.data, loading: false };
    default:
      return state;
  }
}

export const login = ({email, password}) => ({ type: LOG_IN, email, password });
export const me = () => ({ type: ME });
