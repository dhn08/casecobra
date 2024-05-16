import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Children, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex-col flex ">
      {children}
    </MaxWidthWrapper>
  );
};
export default Layout;
