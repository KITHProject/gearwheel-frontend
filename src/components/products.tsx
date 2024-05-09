import { useGetProducts } from "@/actions/get-products";

import { Skeleton } from "./ui/skeleton";
import { DataTable } from "./data-table";
import { productsColumns } from "./ui/products-columns";
import AddProductsModal from "./products-modal";

function Products() {
  const { data: productsData, isLoading: isLoadingProducts } = useGetProducts();

  return (
    <>
      <div className="p-2 mx-auto ">
        <div className="">
          {isLoadingProducts ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <Skeleton className="w-full h-[20px] rounded-full" />
              <Skeleton className="w-full h-[20px] rounded-full" />
              <Skeleton className="w-full h-[20px] rounded-full" />
              <Skeleton className="w-full h-[20px] rounded-full" />
            </div>
          ) : (
            <DataTable
              columns={productsColumns}
              data={productsData}
              filter="title"
              element={<AddProductsModal />}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
