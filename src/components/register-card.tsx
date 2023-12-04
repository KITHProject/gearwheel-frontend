import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cog } from "lucide-react";
import { RegisterForm } from "./register-form";

type Props = {
  setIsLogin: (isLogin: boolean) => void;
};
function RegisterCard({ setIsLogin }: Props) {
  return (
    <Card className="w-96">
      <CardHeader className="relative">
        <CardTitle className="text-center">Register</CardTitle>
        <CardDescription className="flex justify-center items-center gap-1">
          <Cog size={20} />
          gearwheel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button
          className="rounded"
          variant="ghost"
          onClick={() => setIsLogin(true)}
        >
          <ArrowLeft size={16} /> Go Back
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterCard;
