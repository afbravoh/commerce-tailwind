import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col items-center mt-20">{children}</div>;
};

export { Layout };
