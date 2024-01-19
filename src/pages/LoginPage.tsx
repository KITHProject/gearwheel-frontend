import ForgotPasswordCard from "@/components/forgot-password-card";
import LoginCard from "@/components/login-card";
import RegisterCard from "@/components/register-card";
import { useState } from "react";

export type LoginPageState = "login" | "register" | "forgotPassword";

function LoginPage() {
  const [currentCard, setCurrentCard] = useState<LoginPageState>("login");

  if (currentCard === "register") {
    return (
      <div className="flex flex-col justify-center min-h-screen bg-gray-200 dark:bg-primary-foreground">
        <div className="p-4 sm:mx-auto sm:w-96">
          <RegisterCard setCurrentCard={setCurrentCard} />
        </div>
      </div>
    );
  } else if (currentCard === "forgotPassword") {
    return (
      <div className="flex flex-col justify-center min-h-screen bg-gray-200 dark:bg-primary-foreground">
        <div className="p-4 sm:mx-auto sm:w-96">
          <ForgotPasswordCard setCurrentCard={setCurrentCard} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center min-h-screen bg-gray-200 dark:bg-primary-foreground">
        <div className="p-4 sm:mx-auto sm:w-96">
          <LoginCard setCurrentCard={setCurrentCard} />
        </div>
      </div>
    );
  }
}

export default LoginPage;
