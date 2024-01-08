import { useGetProducts } from "@/actions/get-products";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import AddProductsModal from "./products-modal";
import ProductCard from "./product-card";
import { Skeleton } from "./ui/skeleton";
import { DataTable } from "./data-table";
import { productsColumns } from "./ui/products-columns";

function Products() {
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: errorProducts,
    refetch: refetchProducts,
  } = useGetProducts();

  // const values = Object.values(productsData);
  // const filteredProducts = values.filter((item) => {
  //   return Object.values(item)
  //     .join("")
  //     .toLowerCase()
  //     .includes(searchInput.toLowerCase());
  // });
  // console.log(productsData[0].id);
  return (
    <>
      <div className="flex flex-col gap-2 p-2 sm:flex-row">
        <Button
          size="sm"
          variant="default"
          onClick={() => {
            refetchProducts();
            if (errorProducts) {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: `There was a problem with your request (${errorProducts?.message}).`,
              });
            }
          }}
        >
          Get products
        </Button>
        <AddProductsModal />
      </div>
      {/* <div className="flex flex-wrap justify-start gap-4">
        {productsData?.map((product: any) => {
          return (
            <ProductCard
              id={product.id}
              key={product.title}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div> */}
      <div className="p-4 mx-auto overflow-auto max-w-7xl">
        {isLoadingProducts ? (
          <div className="flex items-center justify-center">
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </div>
        ) : (
          <DataTable
            columns={productsColumns}
            data={productsData}
            filter="title"
          />
        )}
      </div>
    </>
  );
}

export default Products;
