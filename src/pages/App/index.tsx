import { BrowserRouter } from "react-router-dom";
import { Routes } from "../Routes";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/Layout";
import { CartProvider } from "../../context";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
};

export { App };
