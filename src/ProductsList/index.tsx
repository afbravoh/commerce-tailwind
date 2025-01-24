import { Card } from "../components/Card";
import { ProductDetail } from "../components/ProductDetail";
import { useCartContext } from "../hooks/useCartContext";

const ProductsList = () => {
  const { filteredProducts, search, setSearch } = useCartContext();

  return (
    <>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">Products</h1>
      </div>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        type="text"
        value={search}
        placeholder="Search a product"
        onChange={(event) => setSearch(event.target.value)}
      />
      {filteredProducts.length > 0 ? (
        <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
          {filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </section>
      ) : (
        <div className="flex justify-center items-center">
          <h2>There's not products yet.</h2>
        </div>
      )}
      <ProductDetail />
    </>
  );
};

export { ProductsList };
