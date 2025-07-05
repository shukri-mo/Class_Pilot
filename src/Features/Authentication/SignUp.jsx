import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { authShema } from "../../Schema/authschema.js";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "./AuthSlice.js";
//import { toast } from "react-toasttify";

function SignUp({ setIsLogin }) {
   const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm({
    resolver: zodResolver(authShema),
  });
  const onSubmit = (data) => {
    dispatch(signUpUser(data));
    console.log("User signed up:", data);
    reset();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1B1B1F]">
      <form
        className="bg-white p-8 rounded shadow-md w-120"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex space-x-6 ">
          <button type="submit" className="bg-[#eee] shadow-2xs px-10 py-2 rounded-md">
            Sign Up
          </button>
          <button type="button"
            className="bg-none shadow-md px-4"
            onClick={() => setIsLogin(true)}
          >
            Already have accont
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="name"
            name="name"
            className="mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm"
            placeholder="Enter your Name"
            {...register("name", { required: true, "name is required": true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              className="mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm"
              placeholder="Enter your Email"
              {...register("email", {
                required: true,
                "email is required": true,
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <Mail className="absolute top-2 right-2 text-gray-500" />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm  sm:text-sm"
            placeholder=""
             {...register("password", {
                required: true,
                "password is required": true,
              })}
          />
          {/* {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )} */}
        </div>

        <button type="submit" className="mt-6 w-full bg-[#1B1B1F] text-white px-4 py-2 rounded-md hover:bg-[#333] transition-colors">
          Create Account
        </button>

        <span className="mt-4 text-sm text-gray-600">Forgott Password</span>
      </form>
        
    </div>
  );
}

//     <div>
//       sign up page
//     </div>

//   )
// }

export default SignUp;
