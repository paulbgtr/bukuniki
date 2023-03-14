import Head from "next/head";
import Link from "next/link";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>bukuniki / dashboard</title>
        <meta name="description" content="Online reading journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero>
          <h1 className="text-7xl">404</h1>
          <p>
            The page you are looking for does not exist. Please check the URL
            and try again...
          </p>
          <p>
            Or you can go back to the{" "}
            {/* todo: if the user is logged in then go back to the dashboard */}
            <Link href="/" className="link">
              homepage
            </Link>
            .
          </p>
        </Hero>
      </main>
    </>
  );
};

export default Home;
