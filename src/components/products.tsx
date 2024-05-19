import { Skeleton } from "./ui/skeleton";
import { DataTable } from "./data-table";
import { productsColumns } from "./ui/products-columns";
import AddProductsModal from "./products-modal";
import { useGetProducts } from "@/actions/get-products";

function Products() {
  const { data: productsData, isLoading: isLoadingProducts } = useGetProducts();

  return (
    <div className="mx-auto">
      {isLoadingProducts ? (
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center justify-between w-full gap-2">
            <Skeleton className="w-full max-w-sm h-[40px] rounded" />
            <Skeleton className="w-[100px] h-[40px] rounded" />
          </div>
          <Skeleton className="w-full h-[250px] rounded" />
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
  );
}

export default Products;
