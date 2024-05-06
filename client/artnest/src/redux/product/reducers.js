import * as actionTypes from './actionType'
const initialState = {
    products: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {

      case actionTypes.GET_PRODUCTS:
        
        return{
          ...state,
          products: action.payload
        }
  
      default:
        return state; // Return unchanged state for unknown actions
    }
  };
  
  export default productReducer;