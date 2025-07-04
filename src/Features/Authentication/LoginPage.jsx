import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react';
import { authShema } from "../../Schema/authschema.js";
import { useNavigate } from "react-router-dom";
 
function LoginPage() {
  
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authShema),
    
  });

  return (
    <div className='flex items-center justify-center h-screen bg-[#1B1B1F]'>
      <form className='bg-white p-8 rounded shadow-md w-120' onSubmit={handleSubmit()}>

         <div className='flex space-x-6 '>
          <button className='bg-[#eee] shadow-2xs px-10 py-2 rounded-md'>Log in</button>
          <button className='bg-none shadow-md px-4' onClick={()=> navigate("/Signup")}>Don't have accont</button>
        </div>

        
       <div className='mt-6'>

          <label className='block text-sm font-medium text-gray-700'>Email</label>
            <div className='relative'>
                <input
                type='email'
                name='email'
                className='mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm'
                placeholder='Enter your Email'
                {...register('email', { required: true, message: "Email is required" })}
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>{errors.email.message}</span>
                )}
                <Mail className='absolute top-2 right-2 text-gray-500' />
                </div>
        </div>

        <div className='mt-6'>
          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            className='mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm  sm:text-sm'
            placeholder='********'
            {...register('password', { required: true, message: "Password is required" })}
            />
          {errors.password && (
            <span className='text-red-500 text-sm'>{errors.password.message}</span>
          )}
        </div>

        <button className='mt-6 w-full bg-[#1B1B1F] text-white px-4 py-2 rounded-md hover:bg-[#333] transition-colors'>
          Log in
        </button>

        <span className='mt-4 text-sm text-gray-600'>Forgott Password</span>
        
      </form>
    </div>
  )
  return (
    <>

    {/*TODO
     1. Create a login form UI with input fields:

-Email
-Password
2. Validate form inputs:
Required fields
Email format

3. Connect the form to Redux:

-Dispatch the loginUser async thunk with form data on submit.

-Show loading state while request is pending.

-Handle and display any errors from the API.

-On success, redirect or update UI accordingly (e.g., navigate to dashboard).*/}
   <div>LoginPage</div>

 
    </>
  )
}

export default LoginPage;
