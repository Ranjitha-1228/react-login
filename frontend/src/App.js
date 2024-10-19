import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import Register from "./component/register";
import Login from "./component/Login";
import Home from "./component/Home";
import  { Auth } from "./component/AuthContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useContext } from "react";
function App (){
   const{user} = useContext(Auth)
   //console.log(user)
   return <>
      
      <BrowserRouter>
      <div className="bg-[#f9fafb]">
      <ToastContainer/>
      </div>
       <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={user?<Home/>:<Login/>}></Route>
        </Routes>
       
      </BrowserRouter>
   </>
}
export default App