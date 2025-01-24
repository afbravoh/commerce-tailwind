import { OrderCard } from "../../components/OrderCard";
import { useCartContext } from "../../hooks/useCartContext";
import { Link, useParams } from "react-router-dom";

const MyOrder = () => {
  const { orders } = useCartContext();
  const { id } = useParams();
  const order = [...orders].find((order) => order.id === id);
  return (
    <>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <button className="h-6 w-6">⬅️</button>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.products?.map((product, index) => (
          <OrderCard key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-between items-center w-80">
        <p>
          <span>Articles</span>
        </p>
        <p>{order.totalProducts}</p>
      </div>
      <div className="flex justify-between items-center w-80">
        <p>
          <span>Total</span>
        </p>
        <p>💲{order.totalOrder}</p>
      </div>
    </>
  );
};

export { MyOrder };
