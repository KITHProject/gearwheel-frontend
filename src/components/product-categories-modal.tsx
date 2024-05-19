import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { PlusCircle, PlusCircleIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { postProductCategories } from "@/actions/post-product-categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { productCategoriesSchemaOptional } from "@/types/form-schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { useGetProductCategories } from "@/actions/get-product-categories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function AddProductCategoriesModal() {
  const [open, setOpen] = useState(false);

  const { data: productsCategoriesData } = useGetProductCategories();

  const queryClient = useQueryClient();

  const { mutateAsync: addCategoriesMutation } = useMutation({
    mutationFn: postProductCategories,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-categories"] });
      queryClient.invalidateQueries({ queryKey: ["product-categories-menu"] });
    },
  });

  const form = useForm<z.infer<typeof productCategoriesSchemaOptional>>({
    resolver: zodResolver(productCategoriesSchemaOptional),
    defaultValues: {
      title: "",
      primary: "true",
      parent_category: undefined,
    },
  });
  async function onSubmit(
    data: z.infer<typeof productCategoriesSchemaOptional>
  ) {
    await addCategoriesMutation(data)
      .then(() => {
        toast({
          variant: "default",
          title: "Category added succesfully",
          description: `Category name: ${data.title}`,
        });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request:
          ${error.respons.data}
          `,
        });
      });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto" variant="default">
          <PlusCircleIcon className="mr-1" />
          Add category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Create product category</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input required placeholder="Category title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        className="flex space-x-1"
                      >
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="true" />
                          </FormControl>
                          <FormLabel className="ml-2 font-normal">
                            true
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="false" />
                          </FormControl>
                          <FormLabel className="ml-2 font-normal">
                            false
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.getFieldState("primary").isDirty ? (
                <>
                  {" "}
                  <FormField
                    control={form.control}
                    name="parent_category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent Category</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {productsCategoriesData.map((category: any) => {
                              return (
                                <SelectItem
                                  key={category.title}
                                  value={category.id.toString()}
                                >
                                  {category.title}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">
                <PlusCircle className="mr-1" />
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddProductCategoriesModal;
