
import supabase from "./Supabase";
export async function signup (name,email,password){
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      }
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function login(email,password){
  const{data,error}=await supabase.auth.signInWithPassword({
    email,
    password
  })
  if(error){
    throw new Error(error.message);
  }
  return data.user;
}

export async function getCurrentUser(){
   const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const{data,error}=await supabase.auth.getUser();
  console.log("current user", data?.user)
  if(error){
    throw new Error (error.message);
  }
  return data?.user
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}