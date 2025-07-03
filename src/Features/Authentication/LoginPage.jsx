import React from "react";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "./AuthSlice";
import { useNavigate } from "react-router-dom";
 
function LoginPage() {
  
  
  return (
    <div className='flex items-center justify-center h-screen bg-[#1B1B1F]'>
      <form className='bg-white p-8 rounded shadow-md w-120' onSubmit={handleSubmit()}>
        
       <div className='mt-6'>

          <label className='block text-sm font-medium text-gray-700'>Email</label>
            <div className='relative'>
                <input
                type='email'
                className='mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm'
                placeholder='Enter your Email'
                />
                <Mail className='absolute top-2 right-2 text-gray-500' />
                </div>
        </div>

        <div className='mt-6'>
          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            className='mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm  sm:text-sm'
            placeholder=''
            />
        </div>

        <button className='mt-6 w-full bg-[#1B1B1F] text-white px-4 py-2 rounded-md hover:bg-[#333] transition-colors'>
          Create Account
        </button>

        <span className='mt-4 text-sm text-gray-600'>Forgott Password</span>
        
      </form>
    </div>
  )
}

export default LoginPage;
