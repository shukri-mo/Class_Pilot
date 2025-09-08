import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/Students/studentSlice";
import authReducer from '../Features/Authentication/AuthSlice.js'
import classReducer from "../Features/Classess/classSlice";
export const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer,
    classes: classReducer,
  },
});
export default store;