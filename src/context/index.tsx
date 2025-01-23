import {
  createContext,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import { Product } from "../types/product.type";

interface CartContextProps {
  isOpenDetail: boolean;
  isOpenCheckout: boolean;
  selectedProduct: Product;
  cart: Product[];

  toogleOpenDetail(): void;

  toogleCloseDetail(): void;

  toogleCloseCheckout(): void;

  handleAddProductToCart(
    event: MouseEvent<HTMLButtonElement>,
    product: Product,
  ): void;

  handleDelete(id: number): void;

  setSelectedProduct: Dispatch<SetStateAction<Product>>;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

export const CartProvider = ({ children }) => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenCheckout, setIsOpenCheckout] = useState<boolean>(false);

  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product,
  );

  const [cart, setCart] = useState<Product[]>([]);
  const toogleOpenDetail = () => setIsOpenDetail(true);
  const toogleCloseDetail = () => setIsOpenDetail(false);

  const toogleOpenCheckout = () => setIsOpenCheckout(true);
  const toogleCloseCheckout = () => setIsOpenCheckout(false);

  const handleAddProductToCart = (
    event: MouseEvent<HTMLButtonElement>,
    product: Product,
  ) => {
    event.stopPropagation();
    toogleCloseDetail();
    setCart((cart) => {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price + product.price,
              }
            : item,
        );
      }
      return [...cart, { ...product, quantity: 1 }];
    });
    toogleOpenCheckout();
  };

  const handleDelete = (id: number) => {
    setCart((cart) => {
      const product = cart.find((item) => item.id === id);
      if (!product) return cart;

      if (product.quantity > 1) {
        return cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: (item.price / item.quantity) * (item.quantity - 1),
              }
            : item,
        );
      } else {
        return cart.filter((item) => item.id !== id);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpenDetail,
        isOpenCheckout,
        selectedProduct,
        cart,
        setSelectedProduct,
        handleAddProductToCart,
        handleDelete,
        toogleOpenDetail,
        toogleCloseDetail,
        toogleCloseCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
