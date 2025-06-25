import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { blinkit } from '../assets/Products'

const Homepage = () => {
    console.log (blinkit);
    return (
        <div>
            <Banner/>
           <div className='p-4 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4'>
            {
                blinkit.products.map((items)=>(
                     <Card data={items}/>
                ))
            }
           
                     
            </div>
        </div>
    )
}

export default Homepage
