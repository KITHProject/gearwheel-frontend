import { deleteProductCategories } from "@/actions/delete-product-categories";
import ProductCategoriesMenu from "./product-categories-menu";
import { Button } from "./ui/button";

function ProductCategories() {
  return (
    <>
      <ProductCategoriesMenu />
      {/* <Button onClick={() => deleteProductCategories(5)}>Delete</Button> */}
    </>
  );
}

export default ProductCategories;
