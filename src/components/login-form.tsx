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
import { loginUser } from "@/stores/useAuthorizationStore";
import { useState } from "react";
import { loginFormSchema } from "@/types/form-schemas";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => setIsVisible(!isVisible);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      loginUser(values.username, values.password);
    }, 2000);
    console.log(values);
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
              <button className="absolute right-2 top-8" onClick={handleClick}>
                {!isVisible ? <EyeOff /> : <Eye />}
              </button>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-full rounded">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
