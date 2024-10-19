import { createContext, useEffect, useState } from "react";
import {useReducer} from "react"
export const  Auth = createContext();
const initializer = {user:null}
 const authReducer = (state,action)=>{
      switch (action.type){
          case "Login" :
          return {user: action.payload};
          case "Logout" :
          return {user:null};
          default:
              return  state
            
      }
 }
function AuthcontextProvider(data){
 const [state,dispatch] = useReducer(authReducer,initializer)
  const [loading,setloading]= useState(true);
  useEffect(()=>{
      const user = localStorage.getItem("token");
      if(user != null){
          dispatch({type:"Login",payload:user})
      }
      setloading(false)

  },[])
   return<Auth.Provider value={{...state,dispatch}} >
                {data.children}
              </Auth.Provider>

}
export default AuthcontextProvider