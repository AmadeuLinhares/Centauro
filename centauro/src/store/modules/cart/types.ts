export enum ActionsTypes {
  AddToCartRequest = 'ADD_TO_CART_REQUEST',
  AddToCartSuccess = 'ADD_TO_CART_SUCCESS',
  RemoveQuantity = 'REMOVE_QUANTITY_CART',
  AddQuantity = 'ADD_QUANTITY_CART',
  RemoveFromCart = 'REMOVE_FROM_CART',
  AddToCartError = 'ADD_TO_CART_ERROR',
}

export interface CartInterface {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  formattedPrice: string;
  formattedOldPrice: string;
  id: string;
  quantity: number;
}
