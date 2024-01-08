import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useGetProductCategories } from "@/actions/get-product-categories";

export type ProductCard = {
  id: string;
  title: string;
  description: string;
  price: string;
  category: number;
};

function ProductCard({ id, title, description, price, category }: ProductCard) {
  const { data: productsCategoriesData } = useGetProductCategories();

  return (
    <Card id={id} className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {productsCategoriesData.map((product: any) => {
          return product.id === category ? (
            <p key={product.id}>{product.title}</p>
          ) : (
            ""
          );
        })}

        <p>{price}</p>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
