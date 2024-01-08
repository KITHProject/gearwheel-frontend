export type ProductCategoriesType = {
  title: string;
  primary: string;
  parent_category?: string;
};

export type CategoryMenu = {
  title: string;
  children: [];
};

export type Products = {
  title: string;
  description: string;
  price: string;
  category: string;
};
