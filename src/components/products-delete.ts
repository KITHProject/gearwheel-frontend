import { deleteProductsQuery } from "@/actions/delete-products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./ui/use-toast";

async function DeleteProducts(id: number) {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteProductsMutation } = useMutation({
    mutationFn: deleteProductsQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  deleteProductsMutation(id)
    .then(() => {
      toast({
        variant: "default",
        title: "Product deleted succesfully",
        description: `Product id: ${id}!`,
      });
    })
    .catch((error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error.response.data}`,
      });
    });
}

export default DeleteProducts;
