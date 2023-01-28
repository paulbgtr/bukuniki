import Head from "next/head";
import Layout from "../components/Layout";

const History = () => {
  return (
    <>
      <Head>
        <title>bukuniki / history</title>
        <meta name="description" content="Online reading journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <h1 className="text-4xl text-center mb-2 text-white-300 font-bold">
            My Reading History
          </h1>
        </Layout>
      </main>
    </>
  );
};

export default History;
