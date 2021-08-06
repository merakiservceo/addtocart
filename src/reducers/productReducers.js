import {
  FETCH_PRODUCTS,
  ORDER_PRODUCTS_BY_PRICE,
  ORDER_PRODUCTS_BY_CATEGORY
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
      case ORDER_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          sort: action.payload.sort,
          filteredItems: action.payload.items,
        };
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
