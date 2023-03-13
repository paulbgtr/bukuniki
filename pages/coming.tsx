import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>bukuniki / coming</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen hero bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Coming Soon...</h1>
              <p className="py-6">
                This project is unfinished and is in active development. You can
                follow the progress on{" "}
                <Link
                  href="https://github.com/gibsol/bukuniki"
                  className="link"
                >
                  Github
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
