import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/Students/studentSlice";
import authReducer from '../Features/Authentication/AuthSlice.js'

export const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer
  },
});
export default store;