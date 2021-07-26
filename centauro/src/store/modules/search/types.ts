export enum ActionsTypes {
  SearchRequest = 'SEARCH_REQUEST',
  SearchSuccess = 'SEARCH_SUCCESS',
  SearchError = 'SEARCH_ERROR',
}
export interface FilterInterface {
  productName: string;
  filter: 'lowestPrice' | 'highestPrice' | 'highestDiscount' | 'relevance';
}

export interface SearchInterface {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rate?: number;
  reviews: number;
  freeShipping: boolean;
  discount: number;
  id: string;
  colors: number;
}
