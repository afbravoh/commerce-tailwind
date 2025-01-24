import { useEffect, useMemo, useState } from "react";
import { Product } from "../types/product.type";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(
    () =>
      search
        ? [...products].filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )
        : [...products],
    [search, products],
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((value) => value.json())
      .then((data) => setProducts(data));
  }, []);

  return { filteredProducts, search, setSearch };
};
