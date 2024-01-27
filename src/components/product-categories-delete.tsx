import { useGetProductCategories } from "@/actions/get-product-categories";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { deleteProductCategories } from "@/actions/delete-product-categories";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteProductCategorySchema } from "@/types/form-schemas";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Trash } from "lucide-react";

function DeleteProductCategory() {
  const { data: productsCategoriesData } = useGetProductCategories();
  const handleDeleteCategories = (id: string) => {
    deleteProductCategories(parseInt(id));
    console.log(id);
    console.log(productsCategoriesData);
  };
  const form = useForm<z.infer<typeof deleteProductCategorySchema>>({
    resolver: zodResolver(deleteProductCategorySchema),
  });
  async function onSubmit(data: z.infer<typeof deleteProductCategorySchema>) {
    handleDeleteCategories(data.id);
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="destructive">
            Delete category
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <DialogHeader>
                <DialogTitle>Delete product category</DialogTitle>
              </DialogHeader>
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
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
              <DialogFooter>
                <Button type="submit" variant="destructive">
                  Delete <Trash />
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DeleteProductCategory;
