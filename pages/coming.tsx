import Head from "next/head";

import LinkHL from "../components/Links/LinkHL";
import Text from "../components/Text";

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>bukuniki / coming soon</title>
        <meta name="description" content="bukuniki is coming soon..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col gap-4 my-20 text-center">
          <h1 className="font-bold text-7xl">Coming Soon...</h1>
          <Text>
            Bukuniki is currently under active development. <br />
            You can follow the development process on our{" "}
            <LinkHL href="https://github.com/gibsol/bukuniki">
              GitHub page
            </LinkHL>
            .
          </Text>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
