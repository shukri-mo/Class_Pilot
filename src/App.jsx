import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./Features/Authentication/LoginPage";
import SignUp from "./Features/Authentication/SignUp";

import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="classes" element={<Classes />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="auth" element={<AuthPage/>}/>

        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
