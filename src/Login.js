import React from 'react'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const diffToast = () =>{
        toast.success("Login Successfull", {
            position: "top-center"
        });
    }
  return (
    <>
        <div className='main-div'>
             <h2>Welcome to Login Page</h2>
             <button className='btn btn-primary' onClick={diffToast}>Login</button>
        </div>

        <ToastContainer/>
    </>
  )
}

export default Login