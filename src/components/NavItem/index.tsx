import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

interface NavItemProps {
  isActiveStyles: string;
  path: string;
}

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  path,
  isActiveStyles,
  children,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? isActiveStyles : undefined)}
    >
      {children}
    </NavLink>
  );
};

export { NavItem };
