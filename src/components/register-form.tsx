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
import { registerFormSchema } from "@/types/form-schemas";
import { register } from "@/actions/post-register";
import { toast } from "./ui/use-toast";
import { Eye, EyeOff } from "lucide-react";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleEyeClick = () => setIsVisible(!isVisible);

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password1: "",
      password2: "",
    },
  });

  async function onSubmit(data: z.infer<typeof registerFormSchema>) {
    setIsLoading(true);
    register(data)
      .then(() => {
        setIsLoading(false);
        toast({
          variant: "default",
          title: "Successful Register",
          description: `Have fun!`,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request (${error.message}).`,
        });
        console.log(error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password1"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type={!isVisible ? "password" : "text"}
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <div
                className="absolute cursor-pointer right-2 top-8"
                onClick={handleEyeClick}
              >
                {!isVisible ? <EyeOff /> : <Eye />}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type={!isVisible ? "password" : "text"}
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-full rounded">
          {isLoading ? "Loading..." : "Register"}
          {""}
        </Button>
      </form>
    </Form>
  );
}
