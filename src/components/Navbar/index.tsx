import { NavItem } from "../NavItem";
import { useCartContext } from "../../hooks/useCartContext.ts";
import { useMemo } from "react";

const Navbar = () => {
  const { cart } = useCartContext();

  const totalItems = useMemo(
    () =>
      cart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0,
      ),
    [cart],
  );
  const activeTabSyles = "underline underline-offset-4";
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
        <li className="text-black/60">🎁🎀🛍️🎒</li>
        <li>
          <NavItem path="/my-orders" isActiveStyles={activeTabSyles}>
            My Orders
          </NavItem>
        </li>

        <li className="text-lg font-bold">🛒 {totalItems}</li>
      </ul>
    </nav>
  );
};

export { Navbar };
