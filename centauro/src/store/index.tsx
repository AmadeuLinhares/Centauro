import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { CartInterface } from './modules/cart/types';
import { SearchInterface } from './modules/search/types';

export interface ReducerInterface {
  cart: CartInterface[];
  search: SearchInterface[];
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;
