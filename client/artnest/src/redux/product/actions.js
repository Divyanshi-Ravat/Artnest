
import axios from 'axios'
import { FIND_PRODUCT, GET_PRODUCTS } from './actionType'
axios.interceptors.request.use(
  (config) => {
    if (config.data instanceof FormData) {
      // Override content type only for multipart form data requests
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);


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

  export function getProducts(){

    console.log("get products")
    return async(dispatch)=>{
      try{
        const response = await axios.get("http://localhost:8080/api/all/getAllProducts")
        console.log("result of access: ",response.data)
        dispatch({
          type : "GET_PRODUCTS",
          payload : response.data

        } 

        )
      }
    catch(err){
      console.log(err);
    }
  }
  
  }

  export function addProduct(product,file){
    console.log("dispatcheditemp: ", product)
    console.log("dispatcheditempF: ", file)
    const formData = new FormData();
formData.append('file', file); // Append file directly
const productDetailsJson = JSON.stringify(product);
formData.append('productDetails', productDetailsJson);
    const token = localStorage.getItem('token')

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data' 
    };
    return async(dispatch)=>{
      try{
        const result = await axios.post(`http://localhost:8080/api/admin/addProduct`, 
        formData,
        {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' 
        }
             
        );
        console.log("doneeee")
      }
      
    catch(err){
      console.log(err);
    }
  }
  
  }
  