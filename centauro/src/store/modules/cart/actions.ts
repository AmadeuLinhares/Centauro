import { Action } from 'redux';
import { ActionsTypes, CartInterface } from './types';

export interface CustomAction extends Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
export interface CustomActionWithouType {
  type: string;
}

export const addCartRequest = (cart: CartInterface): CustomAction => {
  return {
    type: ActionsTypes.AddToCartRequest,
    payload: cart,
  };
};
export const addCartSuccess = (cart: CartInterface): CustomAction => {
  return {
    type: ActionsTypes.AddToCartSuccess,
    payload: cart,
  };
};
export const removeQuantityCart = (id: string): CustomAction => {
  return {
    type: ActionsTypes.RemoveQuantity,
    payload: id,
  };
};
export const addQuantityCart = (id: string): CustomAction => {
  return {
    type: ActionsTypes.AddQuantity,
    payload: id,
  };
};
export const removeFromCart = (id: string): CustomAction => {
  return {
    type: ActionsTypes.RemoveFromCart,
    payload: id,
  };
};
export const addCartError = (): CustomActionWithouType => {
  return {
    type: ActionsTypes.AddToCartError,
  };
};
