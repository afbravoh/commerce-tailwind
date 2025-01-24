import { RouteObject, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { Login } from "../Login";
import { SignUp } from "../SignUp";
import { NotFound } from "../NotFound";

import { useLoginContext } from "../../hooks/useLoginContext";

const Routes = () => {
  const { isLogged } = useLoginContext();
  const publicRoutes: RouteObject[] = [
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <SignUp /> },
  ];
  const privateRoutes: RouteObject[] = [
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    { path: "/my-order/:id", element: <MyOrder /> },
  ];

  const routesAvailable: RouteObject[] = isLogged
    ? privateRoutes
    : publicRoutes;

  return useRoutes([
    { path: "/", element: <Home /> },
    ...routesAvailable,
    { path: "*", element: <NotFound /> },
  ]);
};

export { Routes };
