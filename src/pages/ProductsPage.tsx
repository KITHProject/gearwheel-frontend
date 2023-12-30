import { DataTable } from "@/components/data-table";

import ProductCard from "@/components/product-card";
import ProductCategories from "@/components/product-categories";
import { productsColumns } from "@/components/ui/products-columns";
import Sidebar from "@/components/sidebar";

export type mockProducts = {
  title: string;
  category: string;
};

const mockProducts = [
  { title: "product 1", category: "category 1" },
  { title: "product 2", category: "category 2" },
  { title: "product 3", category: "category 3" },
  { title: "product 4", category: "category 1" },
  { title: "product 5", category: "category 2" },
  { title: "product 6", category: "category 3" },
  { title: "product 7", category: "category 1" },
  { title: "product 8", category: "category 2" },
  { title: "product 9", category: "category 3" },
  { title: "product 10", category: "category 1" },
  { title: "product 11", category: "category 2" },
  { title: "product 12", category: "category 3" },
  { title: "product 13", category: "category 1" },
  { title: "product 14", category: "category 2" },
  { title: "product 15", category: "category 3" },
  { title: "product 16", category: "category 1" },
  { title: "product 17", category: "category 2" },
  { title: "product 18", category: "category 3" },
  { title: "product 19", category: "category 1" },
  { title: "product 20", category: "category 2" },
  { title: "product 21", category: "category 3" },
  { title: "product 22", category: "category 1" },
  { title: "product 23", category: "category 2" },
  { title: "product 24", category: "category 3" },
];

function ProductsPage() {
  return (
    <div className="flex bg-zinc-100">
      <Sidebar />
      <div className="p-4 mx-auto text-center max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <ProductCategories />
          {/* <DataTable columns={productsColumns} data={mockProducts} /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
