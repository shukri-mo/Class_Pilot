import { z } from 'zod';


export const authShema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 6 characters long" }),
  
});


export const signInSchema = z.object({
   email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 6 characters long" }),
})