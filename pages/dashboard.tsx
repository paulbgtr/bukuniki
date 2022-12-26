import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Container from "../components/Container";

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
        <Container>
          {/* Card's text size is in the form of Tailwind's "text-[size]". */}
          <Card title="Current Reading Streak" textSize="5xl">
            25
          </Card>
          <Card
            button
            buttonText="Continue Writing"
            onclick={() => {
              router.push("/my-journals"); // temporary link. will be changed to the latest journal in the future.
            }}
            title="Latest Journal"
            textSize="xl"
          >
            Leo Tolstoy - Anna Karenina
          </Card>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;
