import * as actionTypes from './actionType'
const initialState = {
    products: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {

      case actionTypes.FIND_PRODUCT:
        console.log("in reducer: "+ action.payload)
        return {
          ...state,
         products : action.payload
        };
  
      default:
        return state; // Return unchanged state for unknown actions
    }
  };
  
  export default productReducer;