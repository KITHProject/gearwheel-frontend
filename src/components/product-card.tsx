import { mockProducts } from "@/pages/ProductsPage";

function ProductCard({ title, category }: mockProducts) {
  return (
    <div className="border shadow rounded-xl">
      <div className="p-4">
        <p>{title}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default ProductCard;
