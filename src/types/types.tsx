import { ReactNode } from "react";

export type ProductCategoriesType = {
  title: string;
  primary: boolean;
  parent_category?: number;
};

export type CategoryMenu = {
  title: string;
  children: [];
};
