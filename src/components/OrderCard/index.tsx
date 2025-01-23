import { FC } from "react";
import { Product } from "../../types/product.type";

interface OrderCardProps {
  product: Product;

  handleDelete(id: number): void;
}

const OrderCard: FC<OrderCardProps> = ({ product, handleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product?.images?.[0]}
            alt={product?.title}
          />
        </figure>
        <p className="text-sm font-light">
          {product?.title} <b className="font-bold">(x{product.quantity})</b>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">💲{product?.price}</p>
        <button onClick={() => handleDelete(product.id)}>❌</button>
      </div>
    </div>
  );
};

export { OrderCard };
