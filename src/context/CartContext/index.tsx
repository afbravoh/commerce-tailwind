import {
  createContext,
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Product } from "../../types/product.type.ts";
import { Order } from "../../types/order.type.ts";
import { useProducts } from "../../hooks/useProducts.ts";
import { useCart } from "../../hooks/useCart.ts";

interface CartContextProps {
  isOpenDetail: boolean;
  isOpenCheckout: boolean;

  selectedProduct: Product;
  cart: Product[];
  orders: Order[];
  filteredProducts: Product[];
  search: string;
  totalOrder: number;
  totalProducts: number;

  toogleOpenDetail(): void;

  toogleCloseDetail(): void;

  toogleCloseCheckout(): void;

  handleAddProductToCart(
    event: MouseEvent<HTMLButtonElement>,
    product: Product,
  ): void;

  handleDelete(id: number): void;

  handleEmptyCart(): void;

  setSelectedProduct: Dispatch<SetStateAction<Product>>;

  setOrders: Dispatch<SetStateAction<Order[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const { filteredProducts, search, setSearch } = useProducts();

  const {
    cart,
    totalOrder,
    totalProducts,
    isOpenDetail,
    isOpenCheckout,
    handleAddProductToCart,
    handleDelete,
    handleEmptyCart,
    toogleOpenDetail,
    toogleCloseDetail,
    toogleCloseCheckout,
  } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product,
  );

  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <CartContext.Provider
      value={{
        filteredProducts,
        search,
        setSearch,

        cart,
        totalOrder,
        totalProducts,
        isOpenDetail,
        isOpenCheckout,
        handleAddProductToCart,
        handleDelete,
        handleEmptyCart,
        toogleOpenDetail,
        toogleCloseDetail,
        toogleCloseCheckout,

        selectedProduct,
        setSelectedProduct,
        orders,
        setOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
