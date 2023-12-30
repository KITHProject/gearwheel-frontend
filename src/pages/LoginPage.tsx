import ForgotPasswordCard from "@/components/forgot-password-card";
import LoginCard from "@/components/login-card";
import RegisterCard from "@/components/register-card";
import { useState } from "react";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(true);

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-200 dark:bg-zinc-700/30">
      <div className="p-4 sm:mx-auto sm:w-96">
        {isLogin ? (
          <>
            {isForgotPassword ? (
              <LoginCard
                setIsLogin={setIsLogin}
                setIsForgotPassword={setIsForgotPassword}
              />
            ) : (
              <ForgotPasswordCard
                setIsLogin={setIsLogin}
                setIsForgotPassword={setIsForgotPassword}
              />
            )}
          </>
        ) : (
          <RegisterCard setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
