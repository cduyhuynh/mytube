import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import 'antd/dist/reset.css';
import configureStore from '../config/store';

const store = configureStore();

export default () => {
  return(
    <Provider store={store}>
      {Routes}
    </Provider> 
)};