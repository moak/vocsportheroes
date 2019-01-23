import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./redux/rootReducer";
import rootSaga from './redux/challenge/sagas';
console.log('rootSaga', rootSaga);

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(createSagaMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
  }
  sagaMiddleware.run(rootSaga);