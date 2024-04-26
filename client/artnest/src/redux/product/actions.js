
import axios from 'axios'
import { FIND_PRODUCT } from './actionType'


export function getProductByTitle(title){
  
    return async(dispatch)=>{
      try{
         const {data} = await axios.get(`http://localhost:8080/api/product/findProductByTitle/${title}`)
        console.log("result of access: ",data)
  
      }
    catch(err){
      console.log(err);
    }
    
  }
  
  }

  export function getAllProducts() {
    console.log("getAllProductsDispatcher")
  
    return async (dispatch) => {
      
      try {
        console.log('inside return')
       
        const { data } = await axios.get("http://localhost:8080/api/all/getAllProducts")
        console.log("result of access: ", data)
      } catch (err) {
        console.log("error :", err);
      }
    }
  }
  