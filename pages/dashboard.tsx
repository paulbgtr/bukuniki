import NewJournal from "../pageComponents/dashboard/NewJournal";
import LatestJournal from "../pageComponents/dashboard/LatestJournal";
import ReadingStreak from "../pageComponents/dashboard/ReadingStreak";
import SearchBar from "../pageComponents/dashboard/SearchBar";
import Head from "next/head";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>bukuniki / dashboard</title>
        <meta name="description" content="Dashboard of bukuniki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <section className="mt-6 flex justify-center">
            <SearchBar />
          </section>

          {/* Card's text size is in the form of Tailwind's "text-[size]". */}
          <section className="mt-6 flex gap-8 justify-center">
            <ReadingStreak />
            <LatestJournal />
          </section>

          <section className="mt-6 flex justify-center">
            <NewJournal />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Dashboard;
