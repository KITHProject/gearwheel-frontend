import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog } from "lucide-react";
import { RegisterForm } from "./register-form";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { LoginPageState } from "@/pages/LoginPage";

type Props = {
  setCurrentCard: (currentCard: LoginPageState) => void;
};
function RegisterCard({ setCurrentCard }: Props) {
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
      <CardFooter className="flex flex-col">
        <Separator />
        <p className="my-4">Do you have an account?</p>
        <Button
          onClick={() => setCurrentCard("login")}
          className="w-full rounded"
          variant={"outline"}
        >
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterCard;
