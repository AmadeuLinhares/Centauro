import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { api } from '../../../service/api';
import { searchRequest, searchSuccess, searchError } from './actions';
import { ActionsTypes, SearchInterface } from './types';

type searchProducts = ReturnType<typeof searchRequest>;

function* searchSaga({ payload }: searchProducts) {
  // Com o metodo call do saga, disparamos a request para validar os dados
  // do usuario. Se for valido, chamamos o metodo put que é igual a um
  // dispatch, e chamamos a action ADD_USER_SUCCESS para adicionar as informacoes
  // do usuario no redux, caso as credenciais sejam invalidas, chamamos a
  // action ADD_USER_ERROR

  const { data }: AxiosResponse<SearchInterface[] | []> = yield call(
    api.get,
    `/search?q=${payload.productName}&sort=${payload.filter}`,
  );

  if (data.length) {
    yield put(searchSuccess(data));
  } else {
    yield put(searchError());
  }
}

export default all([takeLatest(ActionsTypes.SearchRequest, searchSaga)]);
