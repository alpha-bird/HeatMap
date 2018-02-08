import { applyMiddleware, createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import reducers from '@redux/reducers';
import root_sagas from '@redux/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = { }) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  if (__DEV__) {
    enhancers.push(devTools());
  }

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancers)
  );

  root_sagas.forEach(saga => sagaMiddleware.run(saga));
  
  return store;
}

module.exports = configureStore;
