import { useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export { Routes };
