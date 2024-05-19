export type ProductCategoriesType = {
  title: string;
  primary: string;
  parent_category?: string;
};

export type CategoryMenu = {
  id: number;
  title: string;
  children: [];
};

export type Products = {
  title: string;
  description: string;
  price: string;
  category: string;
};

export type UserData = {
  id: number;
  username: string;
  email: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  name: string;
};
