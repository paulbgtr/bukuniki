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
        <Layout className="gap-3" centered>
          <div className="flex-col max-w-xl justify-center">
            <SearchBar />

            <section className="mt-6 gap-3 flex">
              <ReadingStreak />
              <LatestJournal />
            </section>

            <NewJournal />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Dashboard;
