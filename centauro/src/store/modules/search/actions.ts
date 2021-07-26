import { Action } from 'redux';
import { ActionsTypes, SearchInterface, FilterInterface } from './types';

export interface CustomAction extends Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
export interface CustomActionWithouType {
  type: string;
}
export const searchRequest = (search: FilterInterface): CustomAction => {
  return {
    type: ActionsTypes.SearchRequest,
    payload: search,
  };
};
export const searchSuccess = (products: SearchInterface[]): CustomAction => {
  return {
    type: ActionsTypes.SearchSuccess,
    payload: products,
  };
};
export const searchError = (): CustomActionWithouType => {
  return {
    type: ActionsTypes.SearchError,
  };
};
