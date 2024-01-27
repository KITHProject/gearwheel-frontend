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
      <div className="flex flex-col items-start justify-between w-full gap-2 p-2 md:items-center sm:flex-row">
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ALL</SelectItem>
            {productsCategoriesMenuData?.map((category: CategoryMenu) => {
              return (
                <>
                  <SelectGroup key={category.title}>
                    <SelectItem value={category.title}>
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
        <div className="flex gap-2">
          <AddProductCategoriesModal />
          <DeleteProductCategory />
        </div>
      </div>
    </>
  );
}

export default ProductCategoriesMenu;
