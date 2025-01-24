import { Product } from "./product.type.ts";

export interface Order {
  id: string;
  date: string;
  products: Product[];
  totalProducts: number;
  totalOrder: number;
}
