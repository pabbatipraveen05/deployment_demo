import React, { lazy, useState } from 'react';
import Footer from '../../Common/Footer';

const Header = lazy(() => import('../../Common/Header'))

export default function Login() {
    const [data, setData] = useState({
        email: '',
        pass: ''
    })
    const { email, pass } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <>
        <Header/>
        <div className='app'>
          <form autoComplete='off' onSubmit={submitHandler}>
            <h1>Sign In</h1>
            <div className='m-4'>
              <label>Email:</label>
              <input className='form-input' type='email' name='email' value={email} onChange={changeHandler} />
            </div>
            <div className='m-4'>
              <label>Password:</label>
              <input className='form-input' type='password' name='pass' value={pass} onChange={changeHandler} />
            </div>
            <div className='row m-4 align-items-baseline'>
              <div className='col-md-6 d-flex justify-content-center'>
                <div className='form-check mb-3 mb-mb-0'>
                   <input className='form-check-input' type='checkbox' />
                   <label className='form-check-label'>Remember me</label>
                </div>
                </div>
                <div className='col d-flex justify-content-center mt-8'>
                   <a href='#'>Forgot password?</a>
                </div>
            </div>
            <button>Sign-In</button>
            <div className='text-center'>
                <p>Not a member? <a href='#!'>Register</a></p>
            </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}