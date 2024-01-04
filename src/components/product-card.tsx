import { mockProducts } from "@/pages/ProductsPage";

function ProductCard({ image, title, category }: mockProducts) {
  return (
    <div className="w-32 border shadow-md rounded-xl">
      <div className="p-4 text-sm">
        <img src={image} alt="" />
        <p>{title}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default ProductCard;
