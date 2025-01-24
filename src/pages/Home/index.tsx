import { ProductsList } from "../../components/ProductsList";
import { RedirectButton } from "../../components/RedirectButton";
import { useLoginContext } from "../../hooks/useLoginContext";

const Home = () => {
  const { isLogged } = useLoginContext();
  return <>{isLogged ? <ProductsList /> : <RedirectButton />}</>;
};

export { Home };
