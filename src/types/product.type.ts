import { Category } from "./category.type";

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  category: Category;
  images: string[];
}
