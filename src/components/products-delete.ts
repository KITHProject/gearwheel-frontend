import { deleteProductsQuery } from "@/actions/delete-products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function DeleteProducts(id: number) {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteProductsMutation } = useMutation({
    mutationFn: deleteProductsQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return deleteProductsMutation(id);
}

export default DeleteProducts;
