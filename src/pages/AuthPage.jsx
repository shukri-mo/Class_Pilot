import { useState } from "react";
import LoginPage from "../Features/Authentication/LoginPage";
import SignUp from "../Features/Authentication/SignUp";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-[#1B1B1F]">
      {isLogin ? (
        <LoginPage setIsLogin={setIsLogin} />
      ) : (
        <SignUp setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default AuthPage;
