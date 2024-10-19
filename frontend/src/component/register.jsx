import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
    const [firstname, setfirstname] = useState("")
    const [lastname,setlastname] = useState("")
    const [userpass, setuserpass] = useState("")
    const [confirmpass, setconfirmpass] = useState("");
    const [email, setemail] = useState("");
    const [phone,setphone] = useState("");
    const [passerror, setpasserr] = useState("");
    const navigate = useNavigate()

    const submit = async (event) => {
        event.preventDefault();
        try {
            if (userpass !== confirmpass) {
               // setpasserr(" please check The password ");
                toast.error("Please Check Your Password Is Incorrect")
                return;
            } else {
                setpasserr("")
            }

            await axios.post("http://localhost:2000/register", { 
                firstname: firstname,
                lastname:lastname ,
                email: email,
                phone:phone,
               password: userpass,  
            }).then((result) => {

                  if (result) {
                    //alert("User register succesfull")
                    // console.log(result.data)
                    //const notify = result.data.message
                    toast.success(result.data.message)
                    navigate("/login")
                }
            })
        } catch (err) {
            // console.log("Register:",err)
            toast.error(err.response.data.message)
        }


    }
    return <>
        <div className="p-6 mt-7">
       
            {/* Website Name  */}
            <div className="flex  flex-col justify-center items-center ">
                <h1 className="text-5xl font-bold text-[#007bff]">Zidio Develpoment </h1>
                <h2 className="mt-7 text-2xl font-medium">Sign up into your account</h2>
            </div>
            {/* Form  */}
            <div>
                <form onSubmit={submit}>
        
                        <div className="max-w-4xl mx-auto mt-10 ">
                            
                            <div className="grid sm:grid-cols-2 gap-8">
                                
                            <div >
                                <span>First Name  </span>
                                <br></br>
                                <input value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} type="text" placeholder="Enter Name" className=" bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full  focus:outline-[#007bff]" required></input>
                            </div>

                            <div >
                                <span>Last Name </span>
                                <br></br>
                                <input value={lastname} onChange={(e)=>{setlastname(e.target.value)}} type="text" placeholder="Enter last name " className="w-25% bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full  focus:outline-[#007bff]" required></input>
                               
                            </div>
                            <div >
                                <span>Email Id </span>
                                <br></br>
                                <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter email " className="w-25% bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full  focus:outline-[#007bff]" required></input>
                               
                            </div>
                            <div >
                                <span>Mobile No </span>
                                <br></br>
                                <input value={phone} onChange={(e)=>{setphone(e.target.value)}} type="text" placeholder="Enter email " className="w-25% bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full focus:outline-[#007bff]" required></input>
                               
                            </div>
                            <div >
                                <span>Password </span>
                                <br></br>
                                <input value={userpass} onChange={(e)=>{setuserpass(e.target.value)}} type="text" placeholder="Enter password " className="w-25% bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full focus:outline-[#007bff]" required></input>
                               
                            </div>
                            <div >
                                <span>Confirm Password</span>
                                <br></br>
                                <input value={confirmpass} onChange={(e)=>{setconfirmpass(e.target.value)}} type="text" placeholder="Enter Confirm password " className="w-25% bg-[#f3f4f6] p-3 border rounded-md mt-3 w-full focus:outline-[#007bff]" required></input>
                            </div>
                                  
                                  {
                                            passerror && <p className="text-red-400 font-medium">{passerror}</p>
                                  }
    
                            </div>
                            <p className="my-3">Already have an account? <Link to="/login" className="text-[#007bff]">Sign In </Link></p>
                            <button className="px-4 py-3 font-bold bg-[#007bff] border rounded-lg text-white">Sign Up</button>
                         

                        </div>
            </form>
               
            </div>
        </div>
    </>


}

export default Register