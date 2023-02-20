import Head from "next/head";

import Layout from "../components/Layout";
import LoginForm from "../pageComponents/login/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>bukuniki / login</title>
        <meta name="description" content="bukuniki sign in page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout centered>
          <LoginForm />
        </Layout>
      </main>
    </>
  );
};

export default Login;
