import { Reducer } from 'redux';
import produce from 'immer';
import { ActionsTypes, SearchInterface } from './types';

const INITIAL_STATE: SearchInterface[] = [];
export const search: Reducer<SearchInterface[]> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionsTypes.SearchSuccess: {
      // state => Estado antes da alteração
      // Draft => Igual ao estado, contudo o draft nós podemos alterar sem ter que
      // respeitar o conceito de imutabilidade do react
      // return produce(state, draft => {
      //   draft.push(action.payload);
      //   return draft;
      // });
      return action.payload;
    }
    case ActionsTypes.SearchError: {
      return produce(state, draft => {
        return {
          ...draft,
          error: true,
        };
      });
    }
    default: {
      return state;
    }
  }
};
