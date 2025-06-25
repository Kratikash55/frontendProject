import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <footer className='bg-gray-100 py-10 px-4 mt-10'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
            {/* Col-1 */}
            <div>
                <h1 className='font-mono font-bold pb-5 text-3xl text-black'>About</h1>
                    <div className='font-serif flex flex-col text-gray-500'>
                        <Link>About Us</Link>
                        <Link>Delivery Information</Link>
                        <Link>Privacy & Policy</Link>
                        <Link>Terms & Conditions</Link>
                        <Link>Contact Us</Link>
                    </div>
            </div>

            {/* col-2 */}
            <div>
            <h1 className='font-mono font-semibold pb-5 text-3xl text-black '>My Account</h1>
                        <div className='font-serif flex flex-col text-gray-500' >
                            <Link>Sign In</Link>
                            <Link>View Cart</Link>
                            <Link>My WhishList</Link>
                            <Link>Track My Order</Link>
                            <Link>Help</Link>
                        </div>
            </div>

            {/* col-3 */}
             <div>
                        <h1 className='font-mono font-bold pb-5 text-3xl text-black '>Contact</h1>
                        <div className='text-gray-500'>
                            Address :- Building Alyssa ,Begonia & Clove Embassy Tech Village,  <br /> Outer Ring Road , Bengalurur,560103

                               <p className='mt-2'>
                            Phone :-987-654-3210
                        </p>
                        </div>
                    </div>

                {/* col -4 */}
                <div>
                 <p className='text-3xl font-bold text-black pb-5'>
                            Follow Us :
                        </p>
                        <p className='text-gray-500 flex flex-col'>
                             <Link><InstagramIcon/> Instagram</Link>
                        <Link><YouTubeIcon/> YouTube</Link>
                        <Link><TelegramIcon/> Telegram</Link>
                        <Link><WhatsAppIcon/> WhatsApp</Link>
                        </p>
                </div>

            </div>
            
        </footer>
    )
}

export default Footer
