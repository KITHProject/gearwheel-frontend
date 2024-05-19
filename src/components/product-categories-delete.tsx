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
import { Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./ui/use-toast";
import { useState } from "react";

function DeleteProductCategory() {
  const [open, setOpen] = useState(false);

  const { data: productsCategoriesData } = useGetProductCategories();
  const queryClient = useQueryClient();

  const { mutateAsync: deleteProductCategoriesMutation } = useMutation({
    mutationFn: deleteProductCategories,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-categories"] });
    },
  });

  const handleDeleteCategories = (id: string) => {
    deleteProductCategoriesMutation(parseInt(id))
      .then(() => {
        toast({
          variant: "default",
          title: "Category succesfully deleted",
          description: `Category ID: ${id}`,
        });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${error.response.data.error}`,
        });
      });
  };

  const form = useForm<z.infer<typeof deleteProductCategorySchema>>({
    resolver: zodResolver(deleteProductCategorySchema),
  });

  async function onSubmit(data: z.infer<typeof deleteProductCategorySchema>) {
    handleDeleteCategories(data.id);
    setOpen(false);
  }
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full sm:w-auto" variant="destructive">
            <Trash2 className="mr-1 " size={18} /> Delete category
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
                    <Select onValueChange={field.onChange} required>
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
                  <Trash2 className="mr-1 " size={18} /> Delete
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
