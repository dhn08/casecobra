interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const Page = ({ searchParams }: PageProps) => {
  return <div>Preview Page</div>;
};
export default Page;
