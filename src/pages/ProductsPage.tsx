import ProductCard from "@/components/product-card";
import Sidebar from "@/components/sidebar";
import ProductCategoriesMenu from "@/components/product-categories-menu";
import { useState } from "react";
import Products from "@/components/products";

function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-primary-foreground">
      <Sidebar />
      <div className="p-4 mx-auto overflow-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <ProductCategoriesMenu setSearchInput={setSearchInput} />
          <Products searchInput={searchInput} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
