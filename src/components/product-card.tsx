import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { deleteProducts } from "@/actions/delete-products";
import { useGetProductCategories } from "@/actions/get-product-categories";

type ProductCard = {
  id: string;
  title: string;
  description: string;
  price: string;
  color: string;
  category: number;
};

function ProductCard({
  id,
  title,
  description,
  price,
  color,
  category,
}: ProductCard) {
  const { data: productsCategoriesData } = useGetProductCategories();
  const handleDeleteProduct = () => {
    deleteProducts(parseInt(id));
  };

  return (
    <Card id={id} className="relative">
      <CardHeader>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              size="icon"
              variant="destructive"
              className="absolute bottom-1 right-1"
            >
              <Trash />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete
                product and remove data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteProduct}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

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

        <p>{color}</p>
        <p>{price}</p>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
