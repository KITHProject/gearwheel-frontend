import { useGetProductCategoriesMenu } from "@/actions/get-product-categories-menu";
import { CategoryMenu } from "@/types/types";
import AddProductCategoriesModal from "./product-categories-modal";
import DeleteProductCategory from "./product-categories-delete";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ProductCategoriesMenu({ setSearchInput }: any) {
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  const { data: productsCategoriesMenuData } = useGetProductCategoriesMenu();

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 p-2 md:flex-row">
        <Select>
          <SelectTrigger className="sm:w-[280px]">
            <SelectValue key={"placeholder"} placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={"all"} value="all">
              ALL
            </SelectItem>
            {productsCategoriesMenuData?.map((category: CategoryMenu) => {
              return (
                <>
                  <SelectGroup>
                    <SelectItem key={category.title} value={category.title}>
                      {category.title}
                    </SelectItem>
                    {category.children.map((child: any) => {
                      return (
                        <SelectItem key={child.title} value={child.title}>
                          {child.title}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </>
              );
            })}
          </SelectContent>
        </Select>
        <div className="flex flex-col w-full gap-2 sm:w-auto sm:flex-row">
          <AddProductCategoriesModal />
          <DeleteProductCategory />
        </div>
      </div>
    </>
  );
}

export default ProductCategoriesMenu;
