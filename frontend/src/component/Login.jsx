import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import  axios from "axios";
import {Auth} from "./AuthContext";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
function Login(){
    const [password,setpass] =useState("")
    const [email,setemail] =  useState("");
    const {dispatch} =  useContext(Auth);
    const navigate =  useNavigate()
   //console.log(dispatch)
    // const login = async()=>{
    //     try{
    //         await axios.post("http://localhost:2000/login",{email:email,password:userpass}).then((result)=>{
    //               if(!result){console.log(result.data)}
    //         })
    //     }catch(error){
    //      console.log(error)
    //     }
    // }
   const  submit =async (event) =>{
        event.preventDefault();
        try{
          const response =  await axios.post("http://localhost:2000/login",{email:email,password:password})
          //console.log(response.data)
          if(response.data.jwt_token){
            toast.success("Login sucessful")
            dispatch({type:"Login",payload:response.data.jwt_token})
            localStorage.setItem("token",response.data.jwt_token);
            navigate("/home")
          }
        }catch(error){
            
        console.log("Login Error :",error.response?error.response.data.message:"Unkonown error");
         toast.error("Login Error :" + (error.response?error.response.data.message:"Unkonown error"))
        }
         
       }
    return <> 
     <div className =  "p-6 mt-7">
       
       {/* Website Name  */}
       <div className="flex  flex-col justify-center items-center ">
           <h1 className="text-5xl font-bold text-[#007bff]">Zidio Develpoment </h1>
           <h2 className="mt-7 text-2xl font-medium">Sign In into your account</h2>
       </div>
       {/* Form  */}
       <div>
           <form onSubmit={submit}>
   
                   <div className="max-w-md w-full mx-auto mt-8 ">
                       
                       <div className="grid gap-4">
                           
                       <div  >
                           <span>Email </span>
                           <br></br>
                           <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter email" className=" bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full focus:outline-[#007bff] " required/>
                       </div>
                       <div >
                           <span>Password  </span>
                           <br></br>
                           <input value={password} onChange={(e)=>{setpass(e.target.value)}} type="text" placeholder="Enter password " className="w-25% bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full  focus:outline-[#007bff]" required></input>
                          
                       </div>
                      </div>
                       <p className="my-3">Don't have an account? <Link to="/" className="text-[#007bff]">Sign Up </Link></p>
                       <button className="px-4 py-3 font-bold bg-[#007bff] border rounded-lg text-white">Sign In </button>
               </div>
       </form>
          
       </div>
     </div>
      </>       
         
}

export default Login