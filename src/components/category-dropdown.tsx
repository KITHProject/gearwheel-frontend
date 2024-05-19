import { Table } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";
import { useGetProductCategoriesMenu } from "@/actions/get-product-categories-menu";
import { CategoryMenu } from "@/types/types";

interface CategoryDropdownProps<TData> {
  table: Table<TData>;
}

export function CategoryDropdown<TData>({
  table,
}: CategoryDropdownProps<TData>) {
  const { data: categoriesMenuData } = useGetProductCategoriesMenu();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ListFilter className="mr-1" size={20} />
          Category
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuItem
          key={"all"}
          onClick={() => table.getColumn("category")?.setFilterValue("")}
          className="font-bold"
        >
          All
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {categoriesMenuData?.map((category: CategoryMenu) =>
          category.children.length === 0 ? (
            <>
              <DropdownMenuItem
                key={category.id}
                onClick={() =>
                  table.getColumn("category")?.setFilterValue(category.title)
                }
              >
                {category.title}
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span key={category.title}>{category.title}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      key={category.id}
                      className="font-bold"
                      onClick={() =>
                        table
                          .getColumn("category")
                          ?.setFilterValue(category.title)
                      }
                    >
                      {category.title}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {category.children.map((child: CategoryMenu) => (
                      <DropdownMenuItem
                        key={child.id}
                        onClick={() =>
                          table
                            .getColumn("category")
                            ?.setFilterValue(child.title)
                        }
                      >
                        {child.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
