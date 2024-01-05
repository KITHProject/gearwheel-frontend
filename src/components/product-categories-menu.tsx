import { useGetProductCategoriesMenu } from "@/actions/get-product-categories-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CategoryMenu } from "@/types/types";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { toast } from "@/components/ui/use-toast";
import AddProductCategoriesModal from "./product-categories-modal";
import { useState } from "react";

function ProductCategoriesMenu({ setSearchInput }: any) {
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  const {
    data: productsCategoriesMenuData,
    isLoading: isLoadingProductCategoriesMenu,
    error: errorProductCategoriesMenu,
    refetch: refetchProductCategoriesMenu,
  } = useGetProductCategoriesMenu();

  // console.log(productsCategoriesMenuData);
  return (
    <>
      <div className="space-x-2 text-center">
        <Button
          size="sm"
          variant="default"
          onClick={() => {
            refetchProductCategoriesMenu();
            if (errorProductCategoriesMenu) {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: `There was a problem with your request (${errorProductCategoriesMenu?.message}).`,
              });
            }
          }}
        >
          {isLoadingProductCategoriesMenu ? (
            <LoadingSpinner />
          ) : (
            "Get categories"
          )}
        </Button>
        <AddProductCategoriesModal />
      </div>
      <div className="flex flex-col items-center p-2 sm:flex-row">
        <Button onClick={() => searchItems("")} size="sm" variant="link">
          All
        </Button>
        {productsCategoriesMenuData?.map((category: CategoryMenu) => {
          return (
            <DropdownMenu key={category.title}>
              <DropdownMenuTrigger asChild>
                <Button
                  onClick={() => searchItems(category.title)}
                  variant="link"
                >
                  {category.title}
                </Button>
              </DropdownMenuTrigger>
              {category.children.length > 0 ? (
                <DropdownMenuContent>
                  <DropdownMenuRadioGroup>
                    {category.children.map((child: any) => {
                      return (
                        <DropdownMenuRadioItem
                          key={child.title}
                          onClick={() => searchItems(child.title)}
                          className="cursor-pointer"
                          value={child}
                        >
                          {child.title}
                        </DropdownMenuRadioItem>
                      );
                    })}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              ) : (
                ""
              )}
            </DropdownMenu>
          );
        })}
      </div>
    </>
  );
}

export default ProductCategoriesMenu;
