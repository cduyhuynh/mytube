import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [];
middleware.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') middleware.push(createLogger());

const createAppStore = compose(applyMiddleware(...middleware))(createStore);
/* eslint-disable no-underscore-dangle */
const store = createAppStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
sagaMiddleware.run(saga);

export default () => store;
