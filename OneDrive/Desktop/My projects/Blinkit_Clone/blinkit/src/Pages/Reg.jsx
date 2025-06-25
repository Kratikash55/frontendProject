import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom'

const Reg = () => {
    const [userEmail,setuserEmail] = useState("");
    const [userpass,setUserPass] = useState("");

    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();

        const users = JSON.parse(localStorage. getItem("users")) || [];

        const userExits = users.find ((user)=>user.userEmail === userEmail);

        if(userExits){
            toast.error("User Already Exists!");
        }else{
        const newUser ={userEmail,userpass};
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        toast.success("Successfully Registered✔️");
         navigate("/");
        }
    }
    return (
          <div className='min-h-screen flex items-center justify-center bg-gray-100'>
          <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
            <h2 className='text-3xl text-center font-bold text-green-700 '>Registration</h2>
            <form action="" onSubmit={handleForm}>
                <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold text-sm'>Name</label>

                    <input type="text" name="" id="" 
                    placeholder='Enter Your Name..'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                </div>

                <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold text-sm'>Email</label>

                    <input type="email" name="" value={userEmail} onChange={(e)=>{setuserEmail(e.target.value)}} id="" 
                    placeholder='Enter Your Email..'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                </div>

                 <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold text-sm'>Password</label>

                    <input type="password" name="" value={userpass} onChange={(e)=>{setUserPass(e.target.value)}} id="" 
                    placeholder='Enter Your Password..'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                </div>

                <button className='w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-600'> Register</button>
            </form>
            <p className='mt-4 text-sm text-center'>Already have an account?  <Link to={"/"} className='text-green-600 font-semibold'>Login</Link></p>
          </div>

  
        </div>
    )
}

export default Reg
