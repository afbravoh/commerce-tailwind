import { useCartContext } from "../../hooks/useCartContext";

const ProductDetail = () => {
  const { isOpenDetail, toogleCloseDetail, selectedProduct } = useCartContext();

  return (
    <aside
      className={`${isOpenDetail ? "flex" : "hidden"} top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button className="shadow-md" onClick={toogleCloseDetail}>
          ❌
        </button>
      </div>
      <div className="flex flex-col overflow-y-scroll">
        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={selectedProduct?.image}
            alt={selectedProduct.title}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            💲{selectedProduct.price}
          </span>
          <span className="font-medium text-md mb-1">
            {selectedProduct.title}
          </span>
          <span className="font-light text-sm">
            {selectedProduct.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export { ProductDetail };
