import Head from "next/head";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>bukuniki / coming soon</title>
        <meta name="description" content="Online readin journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center my-20">
          <h1 className="text-7xl font-bold">Coming Soon...</h1>
          <p className="mt-4">
            Bukuniki is currently under active development. <br />
            You can follow the development process on our{" "}
            <Link
              className="main-link"
              href={"https://github.com/gibsol/bukuniki"}
            >
              Github
            </Link>{" "}
            page.
          </p>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
