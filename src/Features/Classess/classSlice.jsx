import supabase from "../../API/Supabase";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchClasses = createAsyncThunk(
  "classes/fetchClasses",
  async () => {
    const { data, error } = await supabase.from("classes").select("*");

    if (error) {
      console.error("Error fetching classes:", error.message);
      throw new Error("Failed to fetch classes");
    }
    return data;
  }
);

export const addClass = createAsyncThunk(
  "classes/addClass",
  async (formData, thunkAPI) => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    const { data, error } = await supabase
      .from("classes")
      .insert([
        {
          name: formData.name,
          description: formData.description,
          teacher_id: user.id,
          subject: formData.subject,
          grade_level: formData.gradeLevel,
          // start_date: formData.startDate,
          // end_date: formData.endDate,
          schedule: formData.schedule,
          capacity: formData.capacity,
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

export const deleteClass = createAsyncThunk(
  "classes/deleteClass",
  async (classId, thunkAPI) => {
    const { error } = await supabase.from("classes").delete().eq("id", classId);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return classId; // Return the ID of the deleted class
  }
);

export const updateClass = createAsyncThunk(
  "classes/updateClass",
  async (payload, thunkAPI) => {
    const { classId, formData = {} } = payload;

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    const { data, error } = await supabase
      .from("classes")
      .update({
        name: formData.name,
        description: formData.description,
        subject: formData.subject,
        grade_level: formData.gradeLevel,
        schedule: formData.schedule,
        capacity: formData.capacity,
        updated_at: new Date().toISOString(),
      })
      .eq("id", classId)
      .select()
      .single();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data;
  }
);

export const classSlice = createSlice({
  name: "classes",
  initialState: {
    classes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.classes = action.payload;
        state.loading = false;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addClass.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addClass.fulfilled, (state, action) => {
        state.classes.push(action.payload);
        state.loading = false;
      })
      .addCase(addClass.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || action.payload || "Failed to add class";
      })
      .addCase(deleteClass.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteClass.fulfilled, (state, action) => {
        state.classes = state.classes.filter(
          (cls) => cls.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateClass.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateClass.fulfilled, (state, action) => {
        const index = state.classes.findIndex(
          (cls) => cls.id === action.payload.id
        );
        if (index !== -1) {
          state.classes[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateClass.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || action.payload || "Failed to update class";
      });
  },
});
export default classSlice.reducer;
