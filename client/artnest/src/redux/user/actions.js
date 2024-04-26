
import * as actionTypes from './actionType'
import axios from 'axios'


const BaseURL = "http://localhost:8080/api/auth"

export const openLoginDialog=()=>{
    console.log("action is dispatched")
    return{
       type : actionTypes.OPEN_LOGIN_DIALOG
    }
}

export const userAccess=()=>{
  return{
    type: actionTypes.USER_ACCESS
  }
}

export const closeLoginDialog=()=>{
    return{
        type : actionTypes.CLOSE_LOGIN_DIALOG
    }
}

export const addUser=(user)=>{
    return {
        type : actionTypes.ADD_USER,
        payload : user
    }
}

export const storeTokenToLocalStorage=(data)=>{
  localStorage.setItem("token",data);
  return{
    type : actionTypes.STORE_TOKEN,
    payload : data
  }
}

export const activeUser=(data)=>{
  console.log("active user action is called" + data)
   return{
    type:actionTypes.ACTIVE_USER,
    payload:data

   }
}

export function isExist(data){
    return async (dispatch)=>{
        const f = false;
        try{
            const f = await axios.post(`${BaseURL}/isExist`, data);
        }catch(err){

        }
        return f;

    };
}

export function handleSignupApi(data) {
    console.log("handleapi")
    return async (dispatch) => {
      const result = {};
      try {
        const result = await axios.post(`${BaseURL}/signup`, data);
        if (result) {
          dispatch({
            type: "ADD_USER",
            payload: result,
          });
        } else {
          dispatch({
            type: "SIGNIN_ERROR",
          });
        }
      } catch (err) {
        console.log(err)
        dispatch({
          type: "SIGNIN_ERROR",
        });
      }
      return result;
    };
  }


export function handleSigninApi(login){
  
  const { email, password } = login;
  console.log(email, password)
  return async(dispatch)=>{
    try{
      const result = await axios.post(`${BaseURL}/signin`, login);
      const { data: { token, refreshtoken } } = result;
      console.log(token+" "+refreshtoken)
      //dispatch(storeTokenToLocalStorage(token))
      dispatch(activeUser(email));
      //storeTokenToLocalStorage(token);
      localStorage.setItem("token",token);
    }
  catch(err){
    console.log(err);
  }
}

}

export function checkUserAccess(token){
  const result=0;
  console.log("checkUserAccess" +token)
  return async(dispatch)=>{
    try{
       result = await axios.get(`http://localhost:8080/api/user`,{
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log("result of access: ",result.status)

    }
  catch(err){
    console.log(err);
  }
  return result.status;
}

}


 

