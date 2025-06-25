import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { cartTotal, deleteItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';



const Cart = () => {
   const cartValues = useSelector((state)=>(state.cartValue.cartItems));
   const Total = useSelector((state)=>(state.cartValue))

   const dispatch = useDispatch();
   dispatch(cartTotal());

   
    return (
        <div className='w-full max-w-md bg-gray-100 m-4 p-4 sm:p-6 shadow-lg rounded-lg mx-auto '>
           <h1 className='text-lg font-bold mb-4 text-center'>Your Cart</h1>

       {
        cartValues.length === 0 ?
       <div className='text-center'>
        <p className='text-xltext-center text-red-500 '>No Cart Products❌</p>
        <Link to={"/home"} className='text-sm text-green-700 underline'>Continue Shopping🛒</Link> </div> :
         <div className='space-y-4'>
            {/* cart items */}

            {
                cartValues.map((value)=>(
 <div className='flex flex-col sm:flex-row items-center justify-between border-b pb-3'>
                 <div className='flex items-center gap-4 mb-4 sm:mb-8'>

                     <div className='w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center'>
                <img src={value.image} alt="" className='w-16 h-16 object-contain' />
                </div>
                  <div>
                    <h4 className='font-semibold text-sm '>{value.name}</h4>
                    <p className='text-xs text-gray-500'>{value.weight}</p>
                </div>

            </div>
           
            <div className='flex flex-col items-center sm:items-end'>
                <p className='text-green-600 font-semibold'>Price:-{value.price}₹</p>
                <p className='text-lg hover:cursor-pointer' onClick={()=>{dispatch(deleteItem(value))}}> 🗑️</p>
                <div className='border rounded overflow-hidden flex items-center mt-2 p-1'>
                    <span>QTY:{value.quantity}</span><button className='font-bold ml-2 border px-2 text-2xl py-0 hover:bg-gray-200'>-</button>
            </div>
            </div>
            </div>
                ))
            }

             <div className='mt-6  pt-4'>
            <div className='flex justify-between font-semibold text-lg mb-2'>
                <span>Total Quantity :</span>
                <span>{Total. quantityTotal}</span>
            </div>
        </div>
           

        <div className='mt-6  pt-4'>
            <div className='flex justify-between font-semibold text-lg mb-2'>
                <span>Total Price :</span>
                <span>{Total.priceTotal}₹</span>
            </div>
        </div>
        <button className='w-full bg-green-700 hover:bg-green-600 transition text-white py-3 rounded-lg font-semibold text-lg'>
            Buy Now
        </button>

           </div>
       }

          
        </div>
    )
}

export default Cart
