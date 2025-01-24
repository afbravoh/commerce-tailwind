import { useCartContext } from "../../hooks/useCartContext";
import { OrderCard } from "../OrderCard";
import { Order } from "../../types/order.type";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    isOpenCheckout,
    totalOrder,
    totalProducts,
    cart,
    setOrders,
    handleDelete,
    handleEmptyCart,
    toogleCloseCheckout,
  } = useCartContext();

  const navigate = useNavigate();

  const handleCheckout = () => {
    const orderToAdd: Order = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      products: cart,
      totalProducts,
      totalOrder,
    };
    setOrders((prevState) => [...prevState, orderToAdd]);
    handleEmptyCart();
    toogleCloseCheckout();
    navigate(`/my-order/${orderToAdd.id}`);
  };

  return (
    <aside
      className={`${isOpenCheckout ? "flex" : "hidden"} top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Checkout Order</h2>
        <button className="shadow-md" onClick={toogleCloseCheckout}>
          ❌
        </button>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cart.map((product, index) => (
          <OrderCard
            key={index}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">💲{totalOrder}</span>
        </p>
        <button
          className="w-full bg-black py-3 text-white rounded-lg"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export { Checkout };
