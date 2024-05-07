import * as actionTypes from './actionType'
const initialState = {
    products: [],
    categoryProducts:[]
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {

      case actionTypes.GET_PRODUCTS:
        
        return{
          ...state,
          products: action.payload
        }

        case actionTypes.GET_PRODUCTS_BY_CATEGORY:
        
        return{
          ...state,
          categoryProducts: action.payload
        }
  
      default:
        return state; // Return unchanged state for unknown actions
    }
  };
  
  export default productReducer;