

 {/* 
      TODO
    1. Create a signup form UI with input fields with react hook form:

    -Name
  -Email
   -Password

2. Validate form inputs (using zod):

Required fields
Email format
Password strength

3. Connect the form to Redux:

4. Dispatch the signupUser async thunk with form data on submit.

5. Show loading state while request is pending.

6. Handle and display any errors from the API.

7. On success, redirect or update UI accordingly (navigate to dashboard).


8.Clear form after successful signup.

9. Show success message or toast.



    */}

import React from 'react'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "./AuthSlice";
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toasttify";





    function SignUp() {


       return (
    <div className='flex items-center justify-center h-screen bg-[#1B1B1F]'>
      <form className='bg-white p-8 rounded shadow-md w-120' onSubmit={handleSubmit()}>
        
        <div className='flex space-x-6 '>
          <button className='bg-[#eee] shadow-2xs px-10 py-2 rounded-md'>Sign Up</button>
          <button className='bg-none shadow-md px-4' onClick={()=> navigate("/signin")}>Already have accont</button>
        </div>

        <div className='mt-6'>
          <label className='block text-sm font-medium text-gray-700'>Name</label>
          <input
            type='name'
            name='name'
            className='mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm'
            placeholder='Enter your Name'
            {...register('name', { required: true, "name is required": true })}
    
            />

        </div>

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

  
//     <div>
//       sign up page 
//     </div>
   
//   )
// }


export default SignUp
