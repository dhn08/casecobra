import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <SignUp path="/sign-up" />
      </MaxWidthWrapper>
    </>
  );
}
