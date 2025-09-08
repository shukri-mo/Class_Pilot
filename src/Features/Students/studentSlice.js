import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../API/client";
import supabase from "../../API/Supabase";

// Thunks
// export const fetchStudents = createAsyncThunk("students/fetch", async () => {
//   const res = await apiFetch("/api/students");
//   return res;
// });
export const fetchStudents=createAsyncThunk(
  "students/fetchStudents",async()=>{
    const {data,error}=await supabase.from("students")
    .select("*,classes(name)")
    
    ; // You can specify columns like .select("id, title")

  if (error) {
    console.error("Error fetching students:", error.message);
    throw new Error("Failed to fetch students");
  }
  return data
  }
)


// studentSlice.js
export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (formData, thunkAPI) => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    const { data, error } = await supabase
      .from("students")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          grade: parseInt(formData.grade),
          age: parseInt(formData.age),
          gender: formData.gender,
          notes: formData.notes,
          parent_email: formData.parentEmail,
          parent_phone: formData.parentPhone,
          user_id: user.id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId, thunkAPI) => {
    const { error } = await supabase
      .from("students") 
      .delete()
      .eq("id", studentId);
    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return studentId; // Return the ID of the deleted student
  }
);



export const updateStudent = createAsyncThunk(
  "classes/updateStudent",
  async (payload, thunkAPI) => {
    const { studentId, formData = {} } = payload;

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    const { data, error } = await supabase
      .from("students")
      .update({
        name: formData.name,
        email: formData.email,
        grade: formData.grade,
        gender: formData.gender,
        notes: formData.notes,
        parent_email: formData.parentEmail,
        parent_phone: formData.parentPhone,
      })
      .eq("id", studentId)
      .select()
      .single();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data;
  }
);





















// export const addStudent = createAsyncThunk(
//   "students/add",
//   async (studentData, thunkAPI) => {
//     try {
//       return await apiFetch("/api/students", {
//         method: "POST",
//         body: JSON.stringify(studentData),
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateStudent = createAsyncThunk(
//   "students/update",
//   async ({ id, studentData }, thunkAPI) => {
//     try {
//       return await apiFetch(`/api/students/${id}`, {
//         method: "PUT",
//         body: JSON.stringify(studentData),
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteStudent = createAsyncThunk(
//   "students/delete",
//   async (id, thunkAPI) => {
//     try {
//       await apiFetch(`/api/students/${id}`, {
//         method: "DELETE",
//       });
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// Slice
const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // Add
    builder
      .addCase(addStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
  state.loading = false;
  // action.payload could be an array (Supabase usually returns an array)
  const newStudent = Array.isArray(action.payload)
    ? action.payload[0]
    : action.payload;

  state.students.push(newStudent);
})  .addCase(addStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // Update
    builder
      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.students.findIndex(
          (s) => s.id === action.payload.id
        );
        if (index !== -1) {
          state.students[index] = action.payload;
        }
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // Delete
    builder
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter((s) => s.id !== action.payload);
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default studentSlice.reducer;
