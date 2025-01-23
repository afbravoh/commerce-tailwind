import { Product } from "../../types/product.type";
import { FC } from "react";
import { useCartContext } from "../../hooks/useCartContext";

interface CardProps {
  product: Product;
}

const Card: FC<CardProps> = ({ product }) => {
  const { toogleOpenDetail, setSelectedProduct, cart, handleAddProductToCart } =
    useCartContext();

  const handleShowProduct = () => {
    setSelectedProduct(product);
    toogleOpenDetail();
  };

  const isInCart = () => {
    return cart.some((p) => p.id === product?.id);
  };

  return (
    <div
      className="bg-white shadow-md cursor-pointer w-56 h-60 rounded-lg px-2"
      onClick={handleShowProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product?.category?.name}
        </span>
        <img
          src={product?.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-sky-200"
          onClick={(event) => handleAddProductToCart(event, product)}
        >
          {isInCart() ? "✅" : "➕"}
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product?.title}</span>
        <span className="text-sm font-medium">💲{product?.price}</span>
      </p>
    </div>
  );
};

export { Card };
