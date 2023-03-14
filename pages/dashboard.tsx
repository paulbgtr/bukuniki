import Head from "next/head";

import { Layout } from "../components/Layout";

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
        <Layout>
          <h1>bukuniki</h1>
        </Layout>
      </main>
    </>
  );
};

export default Home;
