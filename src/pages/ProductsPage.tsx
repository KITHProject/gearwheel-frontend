import { DataTable } from "@/components/data-table";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Header from "@/components/header";
import { mockData } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useGetProductCategories } from "@/actions/get-products-categories";
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

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productCategoriesSchemaOptional } from "@/types/form-schemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ProductCategories } from "@/actions/post-products-categories";
import { Category } from "@/types/types";
import { useState } from "react";

function ProductsPage() {
  const {
    data: productsCategoriesData,
    isLoading: isLoadingProductCategories,
    error: errorProductCategories,
    refetch: refetchProductCategories,
  } = useGetProductCategories();

  const [primary, setPrimary] = useState<boolean>();

  const form = useForm<z.infer<typeof productCategoriesSchemaOptional>>({
    resolver: zodResolver(productCategoriesSchemaOptional),
    defaultValues: {
      title: "",
      primary: true,
    },
  });
  async function onSubmit(
    data: z.infer<typeof productCategoriesSchemaOptional>
  ) {
    // ProductCategories(data);
    // .then(() => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-secondary">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }
  // .catch((error) => {
  //   toast({
  //     variant: "destructive",
  //     title: "Uh oh! Something went wrong.",
  //     description: `There was a problem with your request (${error.message}).`,
  //   });
  //   console.log(error);
  // });

  return (
    <div className="flex-col md:flex">
      <Header />
      <div className="p-4 text-center max-w-7xl lg:mx-auto">
        <div className="space-x-2 text-center">
          <Button
            size="sm"
            variant="default"
            onClick={() => {
              refetchProductCategories();
              if (errorProductCategories) {
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: `There was a problem with your request (${errorProductCategories?.message}).`,
                });
              }
            }}
          >
            {isLoadingProductCategories ? <LoadingSpinner /> : "Get categories"}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="default">
                Add categories
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
                            <Input
                              required
                              placeholder="Category title"
                              {...field}
                            />
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
                              onChange={() => {
                                console.log(form.getValues("primary"));
                                setPrimary(form.getValues("primary"));
                              }}
                              className="flex"
                            >
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="true" />
                                </FormControl>
                                <FormLabel>Yes</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="false" />
                                </FormControl>

                                <FormLabel>No</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {primary ? (
                      <FormField
                        control={form.control}
                        name="parent_category"
                        render={({ field }) => (
                          <FormItem className="flex items-center gap-2 px-4">
                            <FormLabel>Parent</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      ""
                    )}
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
        </div>
        <div className="m-2 space-x-2">
          {productsCategoriesData?.map((category: Category) => {
            return (
              <DropdownMenu key={category.title}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{category.title}</Button>
                </DropdownMenuTrigger>
                {category.parent_category ? (
                  ""
                ) : (
                  <DropdownMenuContent>
                    <DropdownMenuRadioGroup>
                      <DropdownMenuRadioItem
                        className="cursor-pointer"
                        value=""
                      >
                        Child 1
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        className="cursor-pointer"
                        value=""
                      >
                        Child 2
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        className="cursor-pointer"
                        value=""
                      >
                        Child 3
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            );
          })}
        </div>
        {/* <DataTable columns={columns} data={mockData} /> */}
      </div>
      {/* <footer className="text-sm text-center">...</footer> */}
    </div>
  );
}

export default ProductsPage;
