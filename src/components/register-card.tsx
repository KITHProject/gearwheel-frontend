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
import { Link } from "react-router-dom";

type Props = {
  setIsLogin: (isLogin: boolean) => void;
};
function RegisterCard({ setIsLogin }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardTitle className="text-center">Register</CardTitle>
        <CardDescription>
          <Link to="/" className="flex items-center justify-center gap-1">
            <Cog size={20} />
            gearwheel
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex flex-col my-2">
        <Button
          className="rounded"
          variant="outline"
          onClick={() => setIsLogin(true)}
        >
          <ArrowLeft size={16} /> Go Back
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterCard;
