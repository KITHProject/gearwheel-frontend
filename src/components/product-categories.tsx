import { useGetProductCategories } from "@/actions/get-product-categories";
import { Button } from "./ui/button";
import LoadingSpinner from "./ui/loading-spinner";
import { toast } from "./ui/use-toast";

function ProductCategories() {
  const {
    data: productsCategoriesData,
    isLoading: isLoadingProductCategories,
    error: errorProductCategories,
    refetch: refetchProductCategories,
  } = useGetProductCategories();
  return (
    <>
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
    </>
  );
}

export default ProductCategories;
