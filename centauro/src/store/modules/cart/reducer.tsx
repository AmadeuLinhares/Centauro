/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { ActionsTypes, CartInterface } from './types';

const INITIAL_STATE: CartInterface[] = [];
export const cart: Reducer<CartInterface[]> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    // state => Estado antes da alteração
    // Draft => Igual ao estado, contudo o draft nós podemos alterar sem ter que
    // respeitar o conceito de imutabilidade do react

    case ActionsTypes.AddToCartSuccess: {
      return produce(state, draft => {
        const findProducIndex = draft.findIndex(
          prod => prod.id === action.payload.id,
        );

        if (findProducIndex >= 0) {
          draft[findProducIndex].quantity += 1;
        } else {
          draft.push(action.payload);
        }
      });
    }
    case ActionsTypes.RemoveQuantity: {
      return produce(state, draft => {
        const findProducIndex = draft.findIndex(
          prod => prod.id === action.payload,
        );
        if (findProducIndex >= 0) {
          if (draft[findProducIndex].quantity > 1) {
            draft[findProducIndex].quantity += -1;
          } else {
            draft.splice(findProducIndex, 1);
          }
        }
      });
    }
    case ActionsTypes.AddQuantity: {
      return produce(state, draft => {
        const findProducIndex = draft.findIndex(
          prod => prod.id === action.payload,
        );

        if (findProducIndex >= 0) {
          draft[findProducIndex].quantity += 1;
        }
      });
    }
    case ActionsTypes.RemoveFromCart: {
      return produce(state, draft => {
        const findProducIndex = draft.findIndex(
          prod => prod.id === action.payload,
        );

        if (findProducIndex >= 0) {
          draft.splice(findProducIndex, 1);
        }
      });
    }
    case ActionsTypes.AddToCartError: {
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
