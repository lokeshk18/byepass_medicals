import React from 'react'
import './Login.scss'
const Login = () => {
  return (
    
    <div className='container login-container'>
      <div className='row'>
          <div className="col-md-12 col-lg-6 offset-lg-3">
            <div className="card shadow">
                <div className="card-body ">
                            <form>
                                    <div className='mb-3'>
                                  <label className='form-label'>Email</label>
                                    <input type="text" placeholder='Email'  className='form-control'/>
                                    </div>
                                    <br />
                                    <div className='mb-3'>
                                         <label className='form-label'>Password</label>
                                          <input type="password" name="" id="" placeholder='Password' className='form-control' />
                                    </div>
                                    <div className='d-grid gap-6'>
                                      <button className="btn ">Log In</button>
                                    </div>     
      </form>
  </div>
</div>
    </div>
    </div>
    </div>
  
  )
}
export default Login