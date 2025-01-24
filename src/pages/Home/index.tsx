import { ProductsList } from "../../ProductsList";
import { RedirectButton } from "../../components/RedirectButton";
import { useLoginContext } from "../../hooks/useLoginContext";

const Home = () => {
  const { isLogged } = useLoginContext();
  return <>{isLogged ? <ProductsList /> : <RedirectButton />}</>;
};

export { Home };
