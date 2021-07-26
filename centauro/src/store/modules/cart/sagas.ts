import { all, takeLatest, put } from 'redux-saga/effects';
import { addCartRequest, addCartSuccess } from './actions';
import { ActionsTypes } from './types';

type AddToCartRequest = ReturnType<typeof addCartRequest>;

function* addCartSaga({ payload }: AddToCartRequest) {
  // Com o metodo call do saga, disparamos a request para validar os dados
  // do usuario. Se for valido, chamamos o metodo put que é igual a um
  // dispatch, e chamamos a action ADD_USER_SUCCESS para adicionar as informacoes
  // do usuario no redux, caso as credenciais sejam invalidas, chamamos a
  // action ADD_USER_ERROR

  //  Aqui seria onde verificariamos o estoque do produto, contudo
  // essa consulta nao esta disponivel na api

  yield put(
    addCartSuccess({
      ...payload,
    }),
  );
}

export default all([takeLatest(ActionsTypes.AddToCartRequest, addCartSaga)]);
