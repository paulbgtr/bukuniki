import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "../components/Button";
import { Hero } from "../components/Hero";

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
        <Hero>
          <h1 className="text-5xl font-bold">Book journaling made simple.</h1>
          <p className="py-6">
            Bukuniki is a web-based reading journal that will help you develop
            your reading habits and store all of your records on a book.
          </p>
          <div className="flex gap-3">
            <Button
              onClick={() => {
                router.push("/coming");
              }}
            >
              Get started, it is free!
            </Button>
            <Button
              onClick={() => {
                router.replace("https://github.com/gibsol/bukuniki");
              }}
            >
              Star on Github
            </Button>
          </div>
        </Hero>
      </main>
    </>
  );
};

export default Home;
