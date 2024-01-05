import ProductCard from "@/components/product-card";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";

import ProductCategoriesMenu from "@/components/product-categories-menu";
import { useState } from "react";

export type mockProducts = {
  image: string;
  title: string;
  category: string;
};

const mockProducts = [
  { image: "/logo192.png", title: "product 1", category: "test1" },
  { image: "/logo192.png", title: "product 2", category: "test2" },
  { image: "/logo192.png", title: "product 3", category: "test3" },
  { image: "/logo192.png", title: "product 4", category: "test1" },
  { image: "/logo192.png", title: "product 5", category: "test2" },
  { image: "/logo192.png", title: "product 6", category: "test3" },
  { image: "/logo192.png", title: "product 7", category: "test1" },
  { image: "/logo192.png", title: "product 8", category: "test2" },
  { image: "/logo192.png", title: "product 9", category: "test3" },
  { image: "/logo192.png", title: "product 10", category: "test1" },
  { image: "/logo192.png", title: "product 11", category: "test2" },
  { image: "/logo192.png", title: "product 12", category: "test3" },
  { image: "/logo192.png", title: "product 13", category: "test1" },
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

function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");

  const values = Object.values(mockProducts);
  const filteredProducts = values.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-primary-foreground">
      <Sidebar />
      <div className="p-4 mx-auto overflow-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col p-2 sm:flex-row">
            <Button size="sm" variant="default">
              Add product
            </Button>
          </div>
          <ProductCategoriesMenu setSearchInput={setSearchInput} />

          <div className="flex flex-wrap justify-start gap-4">
            {filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.title}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                />
              );
            })}
          </div>

          {/* <DataTable columns={productsColumns} data={mockProducts} /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
