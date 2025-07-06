import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup, getCurrentUser } from "../../API/AuthApi";


// Login function
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await login(email, password);
      return data;
    } catch (error) {
      console.error("login Error");
      return rejectWithValue(error.message || "Login failed");
    }
  }
);
//Signup function
export const signUpUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await signup(name, email, password);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Signup failed");
    }
  }
);

// Get current user

export const currentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCurrentUser();
      return data;
    } catch (error) {
      console.log("user Error")
      return rejectWithValue(error.message || "Signup failed");
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    isUserCheked: false
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      })

       .addCase(currentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isUserCheked = true
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload ;
        state.isUserCheked = true;
      })

      
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
