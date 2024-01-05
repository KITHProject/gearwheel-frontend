import { useGetProducts } from "@/actions/get-products";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import AddProductsModal from "./products-modal";
import ProductCard from "./product-card";
import { Skeleton } from "./ui/skeleton";

export type mockProducts = {
  image: string;
  title: string;
  category: string;
};

const mockProducts = [
  { image: "/logo192.png", title: "product 1", category: "test1" },
  { image: "/logo192.png", title: "product 2", category: "test2" },
  { image: "/logo192.png", title: "product 3", category: "test5" },
  { image: "/logo192.png", title: "product 4", category: "test5" },
  { image: "/logo192.png", title: "product 5", category: "test2" },
  { image: "/logo192.png", title: "product 6", category: "test3" },
  { image: "/logo192.png", title: "product 7", category: "test1" },
  { image: "/logo192.png", title: "product 8", category: "test6" },
  { image: "/logo192.png", title: "product 9", category: "test3" },
  { image: "/logo192.png", title: "product 10", category: "test1" },
  { image: "/logo192.png", title: "product 11", category: "test2" },
  { image: "/logo192.png", title: "product 12", category: "test3" },
  { image: "/logo192.png", title: "product 13", category: "test6" },
  { image: "/logo192.png", title: "product 14", category: "test2" },
  { image: "/logo192.png", title: "product 15", category: "test3" },
  { image: "/logo192.png", title: "product 16", category: "test1" },
  { image: "/logo192.png", title: "product 17", category: "test2" },
  { image: "/logo192.png", title: "product 18", category: "test3" },
  { image: "/logo192.png", title: "product 19", category: "test1" },
  { image: "/logo192.png", title: "product 20", category: "test2" },
  { image: "/logo192.png", title: "product 21", category: "test3" },
  { image: "/logo192.png", title: "product 22", category: "test1" },
  { image: "/logo192.png", title: "product 23", category: "test2" },
  { image: "/logo192.png", title: "product 24", category: "test3" },
];

function Products({ searchInput }: any) {
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
      <div className="flex flex-wrap justify-start gap-4">
        {isLoadingProducts ? (
          <Skeleton />
        ) : (
          <>
            {productsData.map((product: any) => {
              return (
                <ProductCard
                  id={product.id}
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  color={product.color}
                  price={product.price}
                  category={product.category}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Products;
