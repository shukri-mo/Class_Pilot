{
  /*
    
    Build the Redux auth slice with async thunks for signup and login.
Manage loading, success, and error states for each.
Include a logout action.
Export the reducer for the store and actions for components.
Optionally add selectors and token persistence.


When writing the async thunks for signup and login, use the provided apiFetch function to make API calls.
Just pass the endpoint (like /api/auth/register or /api/auth/login) as the first argument, and an options object including method and body as the second argument.
For example, to call the signup API:


apiFetch('/api/auth/register', {
  method: 'POST',
  body: JSON.stringify({ name, email, password }),
});

    */
   
}


import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
