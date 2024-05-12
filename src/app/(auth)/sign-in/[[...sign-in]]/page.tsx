import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <SignIn path="/sign-in" />
      </MaxWidthWrapper>
    </>
  );
}
