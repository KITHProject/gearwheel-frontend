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

type Props = {
  setIsLogin: (isLogin: boolean) => void;
};
function LoginCard({ setIsLogin }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardTitle className="text-center">Welcome Back!</CardTitle>
        <CardDescription className="flex justify-center items-center gap-1">
          <Cog size={20} />
          gearwheel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <Button className="p-0 mt-2 cursor-not-allowed" variant={"link"}>
          Forgot your password?
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Separator />
        <p>Don't have an account?</p>
        <Button
          onClick={() => setIsLogin(false)}
          className="w-full rounded"
          variant={"outline"}
        >
          SIGN UP FOR GEARWHEEL
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
