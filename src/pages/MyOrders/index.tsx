import { useCartContext } from "../../hooks/useCartContext.ts";
import { OrdersCard } from "../../components/OrdersCard";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { orders } = useCartContext();

  return (
    <>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {orders.map((order, index) => (
        <Link key={index} to={`/my-order/${order.id}`}>
          <OrdersCard order={order} />
        </Link>
      ))}
    </>
  );
};

export { MyOrders };
