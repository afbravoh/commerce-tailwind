import { MouseEvent, useMemo, useState } from "react";
import { Product } from "../types/product.type.ts";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenCheckout, setIsOpenCheckout] = useState<boolean>(false);

  const totalOrder = useMemo(
    () => cart.reduce((prev, product) => prev + product.price, 0),
    [cart],
  );

  const totalProducts = useMemo(
    () => cart.reduce((prev, product) => prev + product.quantity, 0),
    [cart],
  );
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

  const toogleOpenDetail = () => setIsOpenDetail(true);
  const toogleCloseDetail = () => setIsOpenDetail(false);
  const toogleOpenCheckout = () => setIsOpenCheckout(true);
  const toogleCloseCheckout = () => setIsOpenCheckout(false);

  return {
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
  };
};
