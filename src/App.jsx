import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./Ui/ProtectedRoute";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
    <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<Navigate to="/auth" replace />} />
        <Route path="/signup" element={<Navigate to="/auth" replace />} />

        
        <Route element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="classes" element={<Classes />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="auth" element={<AuthPage/>}/>
        </Route>

        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  
  );
}

export default App;
