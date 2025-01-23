import { useCartContext } from "../../hooks/useCartContext";
import { OrderCard } from "../OrderCard";

const Checkout = () => {
  const { isOpenCheckout, toogleCloseCheckout, cart, handleDelete } =
    useCartContext();

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
      <div className="px-6 overflow-y-scroll">
        {cart.map((product, index) => (
          <OrderCard
            key={index}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export { Checkout };
