import {
  createContext,
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product } from "../types/product.type";
import { Order } from "../types/order.type";

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
  const [products, setProducts] = useState<Product[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product,
  );

  const [cart, setCart] = useState<Product[]>([]);

  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenCheckout, setIsOpenCheckout] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const totalOrder = useMemo(
    () => cart.reduce((prev, product) => prev + product.price, 0),
    [cart],
  );

  const totalProducts = useMemo(
    () => cart.reduce((prev, product) => prev + product.quantity, 0),
    [cart],
  );

  const filteredProducts = useMemo(
    () =>
      search
        ? [...products].filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )
        : [...products],
    [search, products],
  );

  const [orders, setOrders] = useState<Order[]>([]);
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
  const handleEmptyCart = () => setCart([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((value) => value.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <CartContext.Provider
      value={{
        filteredProducts,
        isOpenDetail,
        isOpenCheckout,
        selectedProduct,
        cart,
        orders,
        search,
        totalOrder,
        totalProducts,
        setSelectedProduct,
        setOrders,
        setSearch,
        handleAddProductToCart,
        handleDelete,
        handleEmptyCart,
        toogleOpenDetail,
        toogleCloseDetail,
        toogleCloseCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
