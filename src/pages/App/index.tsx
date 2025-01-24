import { BrowserRouter } from "react-router-dom";
import { Routes } from "../Routes";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/Layout";
import { Checkout } from "../../components/Checkout";

import { CartProvider } from "../../context/CartContext";
import { LoginProvider } from "../../context/LoginContext";

const App = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <Navbar />
          <Layout>
            <Routes />
            <Checkout />
          </Layout>
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  );
};

export { App };
