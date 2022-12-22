import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>bukuniki / 404</title>
        <meta name="description" content="Online readin journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center my-20">
          <h1 className="text-7xl font-bold">404</h1>
          <p>
            The page you were looking for could not be found. <br />
            <Link className="main-link" href={"/"}>
              Go back home
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
