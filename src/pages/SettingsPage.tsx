import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetCurrentUser } from "@/actions/get-current-user";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { nameSchema } from "@/types/form-schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchCurrentUser } from "@/actions/patch-current-user";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

function SettingsPage() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: currentUserData } = useGetCurrentUser();

  const form = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
  });

  const { mutateAsync: patchCurrentUserMutation } = useMutation({
    mutationFn: patchCurrentUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
  });

  async function onSubmit(data: z.infer<typeof nameSchema>) {
    const id = currentUserData.id;
    setIsLoading(true);
    patchCurrentUserMutation({ id, data })
      .then(() => {
        setIsLoading(false);
        toast({
          variant: "default",
          title: "Username changed succesfully",
          description: `Have fun ${data.name}!`,
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
    <main className="p-8">
      <div className="space-y-0.5 pb-6">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings.</p>
      </div>

      <div className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Change your name</FormLabel>
                  <FormControl>
                    {currentUserData.name ? (
                      <Input
                        className="max-w-sm"
                        placeholder={currentUserData.name}
                        {...field}
                      />
                    ) : (
                      <Input
                        className="max-w-sm"
                        placeholder="Set your name"
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name
                    or a pseudonym.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2" disabled={isLoading}>
              Save changes
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default SettingsPage;
