import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import search from './search/sagas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): any {
  return yield all([cart, search]);
}
