import React from 'react'
import logo from '../../assets/logo.png'
import './FormHeader.scss'
const FormHeader = () => {
  return (
   <div className="logo-container">
            <img src={logo} alt="logo-form" />
            <p>BYEPASS Medicals</p>
    </div>
  )
}

export default FormHeader