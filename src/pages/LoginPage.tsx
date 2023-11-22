import LoginCard from "@/components/login-card";
import RegisterCard from "@/components/register-card";
import { useState } from "react";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-zinc-700/30">
      <div className="mt-16 text-center"></div>
      <div className="max-w-7xl mx-auto p-4">
        {isLogin ? (
          <LoginCard setIsLogin={setIsLogin} />
        ) : (
          <RegisterCard setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
