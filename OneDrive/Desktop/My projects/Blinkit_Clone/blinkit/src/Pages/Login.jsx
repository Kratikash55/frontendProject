import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
const [Email ,setEmail ] = useState("");
const [pass ,setpass ] = useState("");

const navigate =useNavigate();

function handleForm(e){
    e.preventDefault();

   const users= JSON.parse (localStorage.getItem("users")) || [];

   const verifyUser = users.find((user)=>user.userEmail === Email && user.userpass === pass);

   if(verifyUser){
    toast.success("Successfully Login ");
    navigate("/home");
   }else{
    toast.error("Invaild credentials");
   }

}

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
          <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
            <h2 className='text-3xl text-center font-bold text-green-700 '>Log In</h2>
            <form action="" onSubmit={handleForm}>
                <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold text-sm'>Email</label>

                    <input type="email" name="" value={Email} onChange={(e)=>{setEmail(e.target.value)}} id="" 
                    placeholder='Enter Your Email..'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                </div>

                 <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold text-sm'>Password</label>

                    <input type="password" name="" value={pass} onChange={(e)=>{setpass(e.target.value)}} id="" 
                    placeholder='Enter Your Password..'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                </div>

                <button className='w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-600'> Log In</button>
            </form>
            <p className='mt-4 text-sm text-center'>Don't have an account?  <Link to={"/reg"} className='text-green-600 font-semibold'>Registration</Link></p>
          </div>

  
        </div>
    )
}

export default Login
