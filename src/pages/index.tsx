import RootLayout from "@/components/layouts/rootLayout";

function HomePage() {
  return <div>HomePage</div>;
}

export default HomePage;

HomePage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
