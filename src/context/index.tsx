import { createContext, useState } from "react";
import { Product } from "../types/product.type";

interface CartContextProps {
  count: number;
  isOpenDetail: boolean;
  selectedProduct: Product;
  cart: Product[];

  add(): void;

  toogleOpenDetail(): void;

  setSelectedProduct: (value: ((prev: Product) => Product) | Product) => void;
  setCart: (value: ((prev: Product[]) => Product[]) | Product[]) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(null!);

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product,
  );

  const [cart, setCart] = useState<Product[]>([]);
  const add = () => setCount((count) => count + 1);
  const toogleOpenDetail = () => setIsOpenDetail((isOpen) => !isOpen);

  return (
    <CartContext.Provider
      value={{
        count,
        add,
        isOpenDetail,
        selectedProduct,
        cart,
        setCart,
        setSelectedProduct,
        toogleOpenDetail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
