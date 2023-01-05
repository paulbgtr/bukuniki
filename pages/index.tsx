import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Text from "../components/Text";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>bukuniki / home</title>
        <meta name="description" content="Online reading journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container sm:my-10 md:my-20 mx-auto">
          <h1 className="text-7xl font-bold w-3 mb-6">
            Book journaling made simple.
          </h1>
          <Text className="w-96 mb-6">
            Bukuniki is a web-based reading journal that will help you develop
            your reading habits and store all of your records on a book.
          </Text>
          <Button onclick={() => router.push("/coming")} className="mr-3">
            Get started, It is free!
          </Button>
          <Button
            onclick={() => router.replace("https://github.com/gibsol/bukuniki")}
          >
            Star on Github ★
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
