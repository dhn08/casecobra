import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { Children, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex-col flex ">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};
export default Layout;
