import ProductCategoriesMenu from "@/components/product-categories-menu";
import { useState } from "react";
import Products from "@/components/products";

function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex flex-col items-center ">
      <ProductCategoriesMenu setSearchInput={setSearchInput} />
      <Products />
    </div>
  );
}

export default ProductsPage;
