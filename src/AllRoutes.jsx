import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
// import Register from './Pages/Register/Register'
import Categories from './Pages/Category/Categories'
import Home from './Pages/Home/Home'
import Lander from './Pages/Lander/Lander'
import Cart from './Pages/Cart/Cart'
import Allproduct from './Pages/Product/Allproduct'
import Products from './Components/Products/Products'
import Order from './Components/Order/Order'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<Lander/>}/>
        <Route path='/lander' element={<Lander />} />
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/register' element={<Register/>} /> */}
        <Route path='/home' element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/products' element={<Allproduct/>}/> */}
        <Route path='/products' element={<Products/>}/>
        <Route path='/order' element={<Order/>}/>
        
       
    </Routes>
  )
}
export default AllRoutes;