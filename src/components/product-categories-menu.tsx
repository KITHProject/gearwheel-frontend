import { useGetProductCategoriesMenu } from "@/actions/get-product-categories-menu";
import { CategoryMenu } from "@/types/types";
import AddProductCategoriesModal from "./product-categories-modal";
import DeleteProductCategory from "./product-categories-delete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/actions/get-products";
import { ListFilter } from "lucide-react";
import { getProductsInsideCategory } from "@/actions/get-products-inside-category";

function ProductCategoriesMenu() {
  const queryClient = useQueryClient();

  const { data: productsCategoriesMenuData } = useGetProductCategoriesMenu();

  const { mutateAsync: getProductsInsideCategoryMutation } = useMutation({
    mutationFn: getProductsInsideCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  function SelectCategory(id: number) {
    console.log(id);
    getProductsInsideCategoryMutation(id);
  }

  const { mutateAsync: getAllProducts } = useMutation({
    mutationFn: getProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  function selectAllCategories() {
    getAllProducts();
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 mb-4 md:flex-row">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ListFilter size={16} className="mr-1" /> Category
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem key={"all"} onClick={selectAllCategories}>
              <span className="font-bold">ALL</span>
            </DropdownMenuItem>
            {productsCategoriesMenuData?.map((category: CategoryMenu) => (
              <DropdownMenuSub key={category.title}>
                <DropdownMenuSubTrigger key={category.title}>
                  <span>{category.title}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      key={category.title}
                      onClick={() => SelectCategory(category.id)}
                    >
                      <span>ALL</span>
                    </DropdownMenuItem>
                    {category.children.map((child: CategoryMenu) => (
                      <DropdownMenuItem
                        key={child.title}
                        onClick={() => SelectCategory(child.id)}
                      >
                        <span>{child.title}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-col w-full gap-2 sm:w-auto sm:flex-row">
          <AddProductCategoriesModal />
          <DeleteProductCategory />
        </div>
      </div>
    </div>
  );
}

export default ProductCategoriesMenu;
