import Head from "next/head";

import Layout from "../components/Layout";
import SignUpForm from "../pageComponents/signup/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>bukuniki / sign up</title>
        <meta name="description" content="bukuniki sign in page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout className="flex justify-center">
          <SignUpForm />
        </Layout>
      </main>
    </>
  );
};

export default SignUp;
