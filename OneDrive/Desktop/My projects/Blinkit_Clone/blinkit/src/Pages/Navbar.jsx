import React from 'react'
import Logo from '../assets/blinkit-logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartnum = useSelector((state)=>state.cartValue.cartItems);
    return (
        <div>
            <nav className='bg-white shadow-md px-4 py-3 sticky top-0 z-50'>
                <div className='mx-w-7xl mx-auto flex items-center justify-between'>
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="" className='w-10 object-contain' />
                    </div>

                   {/* Navigation */} 
                <div className='hidden md:flex items-center gap-6 font-semibold text-gray-700'>
                <Link  to={"/home"} className='hover:text-green-600'>Home</Link>
                <Link to={'/category'} className='hover:text-green-600'>Category</Link>
                <Link to={"/offers"} className='hover:text-green-600'>Offers</Link>
                <Link to={"/Contact"} className='hover:text-green-600'>Contact</Link>
                </div>

                {/* Login & Cart */}
                <div className='flex items-center gap-4'>
                    <Link to={"/cart"} className='relative text-gray-700 font-semibold hover:text-green-600'> 🛒Cart({cartnum.length ===0 ? "0" : cartnum.length})</Link>
                    
                    <Link to={"/"} className='px-4 py-2 bg-green-700 text-white rounded-lg font-bold hover:bg-green-600 '>Log In</Link>
                </div>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
