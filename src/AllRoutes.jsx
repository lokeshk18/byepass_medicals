import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import Categories from './Pages/Category/Categories'
const AllRoutes = () => {
  return (
    <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
         <Route path='/home' element={<Home />} />     
        <Route path='/categories' element={<Categories/>} /> 
    </Routes>
  )
}
export default AllRoutes