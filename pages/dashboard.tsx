import { useRouter } from "next/router";
import LatestJournal from "../components/LatestJournal";
import ReadingStreak from "../components/ReadingStreak";
import SearchBar from "../components/SearchBar";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>bukuniki / dashboard</title>
        <meta name="description" content="Online readin journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <div className="mt-6 flex justify-center">
          <SearchBar />
        </div>
        {/* Card's text size is in the form of Tailwind's "text-[size]". */}
        <div className="mt-6 flex gap-8 justify-center">
          <ReadingStreak />
          <LatestJournal />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
