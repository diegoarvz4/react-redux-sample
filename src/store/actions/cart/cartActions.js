import actionTypes from '../actionTypes';


export const purchase = (product) => (
  {
    type: actionTypes.PURCHASE,
  }
)

export const addProduct = (product) => (
  {
    type: actionTypes.ADD_PRODUCT,
    product,
  }
);

export const removeProduct = (cartIdx) => (
  {
    type: actionTypes.REMOVE_PRODUCT,
    cartIdx,
  }
)

export const buyProducts = () => (
  {
    type: actionTypes.BUY_PRODUCTS,
  }
)
