import actionTypes from '../../actions/actionTypes';

const initialState = {
  products: [],
  total: 0,
  cartIdx: 0,
}

export default (state = initialState, action) => {
  switch (action.type){
    case actionTypes.ADD_PRODUCT:
      const new_index = state.cartIdx + 1
      return {
        ...state,
        cartIdx: new_index,
        products: [...state.products, {...action.product, cartIdx: new_index}],
        total: state.total + action.product.price,
      };
    case actionTypes.PURCHASE:
      return {
        products: [],
        total: 0,
        cartIdx: 0,
      };
    case actionTypes.REMOVE_PRODUCT:
      const getProduct = () => {
        for(let i = 0; i < state.products.length; i += 1) {
          if(state.products[i].cartIdx === action.cartIdx){
            return state.products[i]
          }
        }
      }
      const product = getProduct();
      return {
        ...state,
        total: state.total - product.price,
        products: state.products.filter( prod => prod.cartIdx !== action.cartIdx)
      }
    default:
      return state;
  }
}