import Navbar from "../components/Navbar";
import Head from "next/head";

const MyJournals = () => {
  return (
    <>
      <Head>
        <title>bukuniki / my journals </title>
        <meta name="description" content="your journals of bukuniki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1>My Journals</h1>
      </main>
    </>
  );
};

export default MyJournals;
