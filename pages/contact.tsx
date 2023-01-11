import Head from "next/head";
import Layout from "../components/Layout";
import Text from "../components/Text";
import LinkHL from "../components/Links/LinkHL";

const Contact = () => {
  return (
    <>
      <Head>
        <title>bukuniki / dashboard</title>
        <meta name="description" content="Dashboard of bukuniki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout className="w-9/12">
          <section>
            <h1 className="text-4xl mb-2">Contact bukuniki</h1>
            <Text>
              There might be a bug or an issue that you have encountered here,
              and we would be very happy to help you with that. There are
              several ways how you can reach help at bukuniki:
            </Text>
            <ul>
              <li className="text-lg">
                - By trying to find the same Issue on our{" "}
                <LinkHL href="https://github.com/gibsol/bukuniki">
                  Github
                </LinkHL>{" "}
              </li>
              <li className="text-lg">
                - By submitting a new Issue. In that case, we encourage you to
                check our{" "}
                {/* todo: add a link to the contribution guide when it's gonna be written */}
                <LinkHL href="">CONTRIBUTION.md</LinkHL> before submitting a new
                issue.
              </li>
            </ul>
          </section>

          <section className="mt-3">
            <h2 className="text-2xl mb-2">
              What If I do not have a Github account?
            </h2>
            <Text>
              Well, In that case you would probably want to connect us directly
              via email. However, this option is not available yet and will be
              added in future updates.
            </Text>
            <Text>
              You can follow the development process on our{" "}
              <LinkHL href="https://github.com/gibsol/bukuniki">
                Github page
              </LinkHL>
              .
            </Text>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
