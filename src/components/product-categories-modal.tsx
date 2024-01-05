import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { PlusSquare } from "lucide-react";
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
import { useGetProductCategoriesMenu } from "@/actions/get-product-categories-menu";

function AddProductCategoriesModal() {
  const { data: productsCategoriesMenuData } = useGetProductCategoriesMenu();
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
    postProductCategories(data);
    // .then(() => {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-secondary">
    //         {JSON.stringify(data, null, 2)}
    //       </code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="default">
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
                  <FormItem className="flex items-center gap-2 px-4">
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
                  <FormItem className="flex items-center gap-2 px-4">
                    <FormLabel>Primary</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        className="flex space-x-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="true" />
                          </FormControl>
                          <FormLabel className="font-normal">true</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="false" />
                          </FormControl>
                          <FormLabel className="font-normal">false</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        {productsCategoriesMenuData.map((category: any) => {
                          return (
                            <SelectItem
                              key={category.title}
                              value={category.title}
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
            </div>
            <DialogFooter>
              <Button type="submit">
                <PlusSquare className="mr-2" />
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
