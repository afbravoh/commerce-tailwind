import { FC } from "react";
import { Order } from "../../types/order.type";

interface OrdersCardProps {
  order: Order;
}

const OrdersCard: FC<OrdersCardProps> = ({
  order: { totalOrder, totalProducts, id },
}) => {
  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-bold">{id}</span>
          <span className="font-light">{totalProducts} article(s)</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="font-medium text-2xl">💲{totalOrder}</span>
          <button className="h-6 w-6">➡️</button>
        </p>
      </div>
    </div>
  );
};

export { OrdersCard };
