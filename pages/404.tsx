import Head from "next/head";
import LinkHL from "../components/Links/LinkHL";
import Text from "../components/Text";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>bukuniki / 404</title>
        <meta name="description" content="bukuniki Not Found 404" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center my-20">
          <h1 className="text-7xl font-bold">404</h1>
          <Text>
            The page you were looking for could not be found. <br />
            <LinkHL className="main-link" href={"/"}>
              Go back home
            </LinkHL>
          </Text>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
