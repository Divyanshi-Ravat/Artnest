
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
function generateUniqueBoundaryString() {
  // Using crypto (if available)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Simple fallback
  let boundary = '----';
  for (let i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 16).toString(16);
  }
  return boundary;
}



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

    
    return async(dispatch)=>{
      try{
        const response = await axios.get("http://localhost:8080/api/all/getAllProducts")
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


  export function addProduct(product){

    console.log("get products:", product)
    const token = localStorage.getItem('token')
    return async(dispatch)=>{
      try{
        const response = await axios.post("http://localhost:8080/api/admin/createProduct",product,{

          headers: {Authorization: `Bearer ${token}`}
        })
        console.log("result of access: ",response.data)
      }
    catch(err){
      console.log(err);
    }
  }
  
  }

  export function deleteProduct(title){

    const token = localStorage.getItem('token')
    return async(dispatch)=>{
      try{
        const response = await axios.delete(`http://localhost:8080/api/admin/deleteProduct/${title}`,{

          headers: {Authorization: `Bearer ${token}`}
        })
        console.log("deleted ",response.data)
      }
    catch(err){
      console.log(err);
    }
  }
  
  }



//   export function addProduct(product){
//     console.log("dispatcheditemp: ", product)
    
//     const formData = new FormData();
//      formData.append('file', file); // Append file directly


// const productDetailsJson = JSON.stringify(product);

// //formData.append('productDetails', productDetailsJson);
// formData.append('productDetails',
// new Blob([JSON.stringify(productDetailsJson)], { 
//   type: 'application/json'
// }));
//     const token = localStorage.getItem('token')
//     console.log("form data: ",formData.get('productDetails'))

//     const headers = {
//       'Authorization': `Bearer ${token}`,
//       //'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>' 
//       //'Content-Type':`multipart/form-data; boundary=${generateUniqueBoundaryString()}`
//       mode: 'no-cors'
//     };
//     return async(dispatch)=>{
//       try {
//         const response = await fetch('http://localhost:8080/api/admin/createProduct', {
//           method: 'POST',
         
//           headers,
//           body: formData
//         });
    
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
    
//         const data = await response.json(); // Parse JSON response
//         console.log("doneeee");
//         return data; // Return the parsed data for further processing
//       } catch (err) {
//         console.error('Error adding product:', err);
//         // Handle errors appropriately, e.g., dispatch an error action in Redux
//       }
//   }
  
//   }


