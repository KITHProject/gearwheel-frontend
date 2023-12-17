export type ProductCategoriesType = {
  title: string;
  primary: boolean;
  parent_category?: number;
};

export type Category = ProductCategoriesType & {
  id: number;
  products_inside: string;
};
