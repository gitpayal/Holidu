import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import initialState from './initial-state';
import reducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(
      sagaMiddleware,
      logger
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f // Chrome Redux DevTools extension
  )
);

export default configureStore;

sagaMiddleware.run(rootSaga);
