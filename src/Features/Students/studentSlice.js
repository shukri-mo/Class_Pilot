import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../API/client";

export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  const res = await apiFetch("/api/students");
  console.log(res);
  return res;
});
export const addStudent = createAsyncThunk(
  "students/add",
  async (studentData, thunkAPI) => {
    try {
      return await apiFetch("/api/students", {
        method: "POST",
        body: JSON.stringify(studentData),
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateStudent = createAsyncThunk(
  "students/update",
  async ({ id, studentData }, thunkAPI) => {
    try {
      return await apiFetch(`/api/students/${id}`, {
        method: "PUT",
        body: JSON.stringify(studentData),
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id, thunkAPI) => {
    try {
      await apiFetch(`/api/students/${id}`, {
        method: "DELETE",
      });
      return id; // Return the ID to remove it from the state
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false, // idle | loading | succeeded
    error: null,
  }, 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addStudent.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
  }   
})

export default studentSlice.reducer