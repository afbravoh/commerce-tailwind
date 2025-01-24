import { useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { MyAccount } from "../MyAccount";
import { Login } from "../Login";
import { NotFound } from "../NotFound";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/account", element: <MyAccount /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export { Routes };
