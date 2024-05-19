import ProductCategoriesMenu from "@/components/product-categories-menu";
import Products from "@/components/products";

function ProductsPage() {
  return (
    <main className="p-8">
      <div className="space-y-0.5 pb-6">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
      </div>
      <ProductCategoriesMenu />
      <Products />
    </main>
  );
}

export default ProductsPage;
