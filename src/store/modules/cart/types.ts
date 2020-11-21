import { addProductToCartRequest } from "./actions";

export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export type IProduct = {
  id: number,
  title: string,
  price: number
}

export type ICartItem = {
  product: IProduct,
  quantity: number
}

export type ICartState = {
  items: ICartItem[]
  failedStockCheck: number[]
}

export type IStockResponse = {
  id: number,
  quantity: number
}

export type ICheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
