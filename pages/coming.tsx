import Head from "next/head";
import Text from "../components/Text";
import LinkHL from "../components/LinkHL";

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>bukuniki / coming soon</title>
        <meta name="description" content="Online readin journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center my-20">
          <h1 className="text-7xl font-bold">Coming Soon...</h1>
          <Text className="mt-4">
            Bukuniki is currently under active development. <br />
            You can follow the development process on our{" "}
            <LinkHL href="https://github.com/gibsol/bukuniki">
              Github page
            </LinkHL>
            .
          </Text>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
