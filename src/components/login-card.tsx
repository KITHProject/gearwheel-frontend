import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import { LoginForm } from "./login-form";
import { Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { LoginPageState } from "@/pages/LoginPage";

type Props = {
  setCurrentCard: (currentCard: LoginPageState) => void;
};
function LoginCard({ setCurrentCard }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardTitle className="text-center">Welcome Back!</CardTitle>
        <CardDescription>
          <Link to="/" className="flex items-center justify-center gap-1">
            <Cog size={20} />
            gearwheel
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <Button
          onClick={() => setCurrentCard("forgotPassword")}
          className="p-0 mt-2"
          variant={"link"}
        >
          Forgot your password?
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Separator />
        <p>Don't have an account?</p>
        <Button
          onClick={() => setCurrentCard("register")}
          className="w-full rounded"
          variant={"outline"}
        >
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
