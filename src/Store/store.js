import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/Students/studentSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});
export default store;