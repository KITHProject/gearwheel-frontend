import ProductCategoriesMenu from "@/components/product-categories-menu";
import { useState } from "react";
import Products from "@/components/products";

function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <ProductCategoriesMenu setSearchInput={setSearchInput} />
      <Products />
    </>
  );
}

export default ProductsPage;
