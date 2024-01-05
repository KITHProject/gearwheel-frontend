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

type ProductCard = {
  id: string;
  title: string;
  description: string;
  price: string;
  color: string;
  category: string;
};

function ProductCard({
  id,
  title,
  description,
  price,
  color,
  category,
}: ProductCard) {
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
        <p>{color}</p>
        <p>{price}</p>
      </CardContent>
      <CardFooter>
        <p>{category}</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
