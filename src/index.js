
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducer from './redux/rootReducer';

import './index.css';
import App from './App';

import rootSaga from './redux/rootSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);