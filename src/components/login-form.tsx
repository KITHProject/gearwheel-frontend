import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { loginFormSchema } from "@/types/form-schemas";
import { Eye, EyeOff } from "lucide-react";
import { login } from "@/actions/post-login";
import { setAuthorized, setUsername } from "@/stores/useAuthorizationStore";
import { toast } from "./ui/use-toast";
import LoadingSpinner from "./ui/loading-spinner";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleEyeClick = () => setIsVisible(!isVisible);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);
    login(data)
      .then(() => {
        setIsLoading(false);
        setUsername(data.username);
        setAuthorized(true);
        toast({
          variant: "default",
          title: "Successful login",
          description: `Have fun ${data.username}!`,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request (${error.message}).`,
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input required placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  required
                  type={!isVisible ? "password" : "text"}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <div
                className="absolute right-2 top-8 cursor-pointer"
                onClick={handleEyeClick}
              >
                {!isVisible ? <EyeOff /> : <Eye />}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-full rounded">
          {isLoading ? <LoadingSpinner /> : "Login"}
        </Button>
      </form>
    </Form>
  );
}
