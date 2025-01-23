import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Product } from "../../types/product.type";
import { ProductDetail } from "../../components/ProductDetail";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((value) => value.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </section>
      <ProductDetail />
    </>
  );
};

export { Home };
