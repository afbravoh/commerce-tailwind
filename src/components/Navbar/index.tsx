import { NavItem } from "../NavItem";
import { useCartContext } from "../../hooks/useCartContext";
import { useLoginContext } from "../../hooks/useLoginContext";

const Navbar = () => {
  const { totalProducts } = useCartContext();
  const { isLogged, user, handleLogout } = useLoginContext();

  const activeTabSyles = "underline underline-offset-4";

  const publicRoutes = [
    { path: "/login", label: "Login" },
    { path: "/signUp", label: "Sign Up" },
  ];
  const privateRoutes = [
    {
      path: "/my-orders",
      label: "My Orders",
    },
  ];

  const routesAvailable = isLogged ? privateRoutes : publicRoutes;

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem path="/" isActiveStyles={activeTabSyles}>
            Shoopi
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {routesAvailable.map((route) => (
          <li>
            <NavItem path={route.path} isActiveStyles={activeTabSyles}>
              {route.label}
            </NavItem>
          </li>
        ))}
        {isLogged && (
          <>
            <li className="text-black/60 font-bold">
              Welcome {user?.username}
            </li>
            <button
              className="text-black/60 font-bold"
              onClick={() => handleLogout()}
            >
              📴Logout
            </button>
            <li className="text-lg font-bold">🛒 {totalProducts}</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export { Navbar };
