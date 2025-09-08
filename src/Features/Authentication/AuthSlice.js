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
      console.log("user Error");
      return rejectWithValue(error.message || "Signup failed");
    }
  }
);
let userFromStorage = null;

try {
  const userData = localStorage.getItem("user");
  userFromStorage = userData ? JSON.parse(userData) : null;
} catch (error) {
  console.error("Failed to parse user from localStorage:", error);
  userFromStorage = null;
}
const tokenFromStorage = localStorage.getItem("token");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage,
    token: tokenFromStorage || null,
    isAuthenticated: false,
    loading: false,
    error: null,
    isUserCheked: false,
    // Add userid to the initial state
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
        const user = action.payload?.user ?? action.payload;
  const token = action.payload?.access_token;
        state.loading = false;
        state.user = {
          id: user.id,
          email: user.email,
          name: user.user_metadata?.name || "", // Might be undefined
          user_metadata: user.user_metadata, // ✅ include this if needed

        };
        state.isAuthenticated = true;
                  localStorage.setItem("token", token);
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user)); // Optional
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
        console.log("🟩 Sign up response:", action.payload);

        const user = action.payload?.user ?? action.payload;

        state.loading = false;
        state.user = {
          id: user.id,
          email: user.email,
          name: user.user_metadata?.name || "", // should be here
        };
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
        const user = action.payload;

        console.log("🧠 Redux - current user payload:", user); // ✅ Must log this

        state.loading = false;
        state.user = {
          id: user.id,
          email: user.email,
          name: user.user_metadata?.name || "",
        };
        state.isAuthenticated = true;
        state.isUserCheked = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.isUserCheked = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
