import { DataTable } from "@/components/data-table";

import ProductCard from "@/components/product-card";
import ProductCategories from "@/components/product-categories";
import { productsColumns } from "@/components/ui/products-columns";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export type mockProducts = {
  image: string;
  title: string;
  category: string;
};

const mockProducts = [
  { image: "/logo192.png", title: "product 1", category: "category 1" },
  { image: "/logo192.png", title: "product 2", category: "category 2" },
  { image: "/logo192.png", title: "product 3", category: "category 3" },
  { image: "/logo192.png", title: "product 4", category: "category 1" },
  { image: "/logo192.png", title: "product 5", category: "category 2" },
  { image: "/logo192.png", title: "product 6", category: "category 3" },
  { image: "/logo192.png", title: "product 7", category: "category 1" },
  { image: "/logo192.png", title: "product 8", category: "category 2" },
  { image: "/logo192.png", title: "product 9", category: "category 3" },
  { image: "/logo192.png", title: "product 10", category: "category 1" },
  { image: "/logo192.png", title: "product 11", category: "category 2" },
  { image: "/logo192.png", title: "product 12", category: "category 3" },
  { image: "/logo192.png", title: "product 13", category: "category 1" },
  { image: "/logo192.png", title: "product 14", category: "category 2" },
  { image: "/logo192.png", title: "product 15", category: "category 3" },
  { image: "/logo192.png", title: "product 16", category: "category 1" },
  { image: "/logo192.png", title: "product 17", category: "category 2" },
  { image: "/logo192.png", title: "product 18", category: "category 3" },
  { image: "/logo192.png", title: "product 19", category: "category 1" },
  { image: "/logo192.png", title: "product 20", category: "category 2" },
  { image: "/logo192.png", title: "product 21", category: "category 3" },
  { image: "/logo192.png", title: "product 22", category: "category 1" },
  { image: "/logo192.png", title: "product 23", category: "category 2" },
  { image: "/logo192.png", title: "product 24", category: "category 3" },
];

const mockCategories = ["category 1", "category 2", "category 3"];

function ProductsPage() {
  const [searchInput, setSearchinput] = useState("");

  const searchItems = (searchValue: string) => {
    setSearchinput(searchValue);
  };

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
            <ProductCategories />
            <Button size="sm" variant="default">
              Add product
            </Button>
          </div>
          <div className="flex flex-col p-2 sm:flex-row">
            <Button onClick={() => searchItems("")} size="sm" variant="link">
              All
            </Button>
            {mockCategories.map((category) => {
              return (
                <Button
                  key={category}
                  onClick={() => searchItems(category)}
                  size="sm"
                  variant="link"
                >
                  {category}
                </Button>
              );
            })}
          </div>
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
