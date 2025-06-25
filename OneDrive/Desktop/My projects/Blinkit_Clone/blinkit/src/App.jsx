import React from 'react'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Navbar from './Pages/Navbar'
import Login from './Pages/Login'
import Reg from './Pages/Reg'
import Cart from './Pages/Cart'
import Footer from './Pages/Footer'
import Categories from './Pages/Categories'
import Offer from './Pages/Offer'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category' element={<Categories/>}/>
        <Route path='/offers' element={<Offer/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
