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

import { Cog } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = {
  setIsLogin: (isLogin: boolean) => void;
  setIsForgotPassword: (isForgotPassword: boolean) => void;
};
function ForgotPasswordCard({ setIsLogin, setIsForgotPassword }: Props) {
  // const form = useForm<z.infer<typeof loginFormSchema>>({
  //   resolver: zodResolver(loginFormSchema),
  //   defaultValues: {
  //     username: "",
  //     password: "",
  //   },
  // });
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardTitle className="text-center">Forgot Password</CardTitle>
        <CardDescription className="flex items-center justify-center gap-1">
          <Cog size={20} />
          gearwheel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="py-2 text-xs">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </CardDescription>
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <Button className="w-full mt-2 rounded">Send</Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Separator />
        <p>Don't have an account?</p>
        <Button
          onClick={() => {
            setIsLogin(false);
            setIsForgotPassword(false);
          }}
          className="w-full rounded"
          variant={"outline"}
        >
          SIGN UP FOR GEARWHEEL
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ForgotPasswordCard;
