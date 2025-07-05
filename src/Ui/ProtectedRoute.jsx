import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
const token= useSelector((state) => state.auth.token);
  // Check if the user is authenticated 
    if (!token) {
        // User is not authenticated, redirect to login page
        return <Navigate to="/signup" replace />;
  }

  return children;
}