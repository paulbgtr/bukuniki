import Head from "next/head";

import Layout from "../components/Layout";
import LinkHL from "../components/Links/LinkHL";
import Text from "../components/Text";

const Help = () => {
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
          <h1 className="mb-5 text-4xl font-bold text-center text-white-300">
            bukuniki: Help
          </h1>
          <Text>
            There might be a bug or an issue that you have encountered here, and
            we would be very happy to help you with that. There are several ways
            how you can reach help at bukuniki:
          </Text>
          <ul>
            <li className="text-lg">
              By finding that Issue on our{" "}
              <LinkHL href="https://github.com/gibsol/bukuniki">Github</LinkHL>{" "}
            </li>
            <li className="text-lg">
              By submitting a new Issue. In that case, we encourage you to check
              our{" "}
              {/* todo: add a link to the contribution guide when it's gonna be written */}
              <LinkHL href="">CONTRIBUTION.md</LinkHL> before submitting a new
              issue.
            </li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Help;
