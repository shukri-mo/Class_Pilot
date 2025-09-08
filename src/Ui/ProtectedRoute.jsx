import { useSelector } from "react-redux";
import { Navigate  } from "react-router-dom";

export default function ProtectedRoute({ children }) {
const {  isAuthenticated } = useSelector((state) => state.auth)
  // Check if the user is authenticated 
    if (!isAuthenticated) {
        // User is not authenticated, redirect to login page
        return <Navigate to="/auth" replace />;
  }

  return children
}