import React from 'react'
import { useDispatch } from 'react-redux';
import {AddToCart} from "../features/cartSlice.js";

const Card = (props) => {
    const dispatch = useDispatch();

    const {data} = props;
    return (
        <div className='border m-1 rounded-lg shadow hover:shadow-lg transition-all duration-300 p-3 flex flex-col'>

            <div className='relative'>
                <img src={data.image} alt="product image" className='w-full h-40 object-contain' />
                <div className='absolute top-2 left-2 bg-green-600 text-white md:text-xs px-2 py-1 rounded '>{data.discount}%OFF</div>
            </div>

           <h3 className='mt-2 font-semibold text-sm'>{data.name}</h3> 
           <p className='text-xs text-gray-500'>{data.weight}</p>

           <div className='flex justify-between items-center mt-2'>
            <p className='font-bold text-green-600 text-lg'>Price:-{data.price}₹</p>
            <button className='bg-green-700 text-white px-4 py-1 rounded-full  hover:bg-green-600' onClick={()=>{dispatch(AddToCart(data));}}>Add</button>
           </div>
        </div>
    )
}

export default Card
