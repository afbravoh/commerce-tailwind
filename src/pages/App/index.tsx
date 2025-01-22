import { BrowserRouter } from "react-router-dom";
import { Routes } from "../Routes";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export { App };
