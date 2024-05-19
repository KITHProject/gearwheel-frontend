import AddProductCategoriesModal from "./product-categories-modal";
import DeleteProductCategory from "./product-categories-delete";
import AddProductsModal from "./products-modal";

function ProductCategoriesMenu() {
  return (
    <div className="flex flex-col items-center justify-end gap-2 mb-4 sm:flex-row">
      <AddProductsModal />
      <AddProductCategoriesModal />
      <DeleteProductCategory />
    </div>
  );
}

export default ProductCategoriesMenu;
