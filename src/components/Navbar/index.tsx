import { NavItem } from "../NavItem";
import { useCartContext } from "../../hooks/useCartContext.ts";

const Navbar = () => {
  const { count } = useCartContext();
  const activeTabSyles = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem path="/" isActiveStyles={activeTabSyles}>
            SHOOPI
          </NavItem>
        </li>
        <li>
          <NavItem path="/" isActiveStyles={activeTabSyles}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem path="/clothes" isActiveStyles={activeTabSyles}>
            clothes
          </NavItem>
        </li>
        <li>
          <NavItem path="/electronics" isActiveStyles={activeTabSyles}>
            electronics
          </NavItem>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">some@stuff</li>
        <li>
          <NavItem path="/my-orders" isActiveStyles={activeTabSyles}>
            My Orders
          </NavItem>
        </li>

        <li>
          <NavItem path="/account" isActiveStyles={activeTabSyles}>
            Account
          </NavItem>
        </li>

        <li>
          <NavItem path="/login" isActiveStyles={activeTabSyles}>
            Login
          </NavItem>
        </li>

        <li className="text-lg font-bold">🛒 {count}</li>
      </ul>
    </nav>
  );
};

export { Navbar };
