import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>bukuniki / login</title>
        <meta name="description" content="bukuniki sign in page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Layout className="flex justify-center">
          <LoginForm />
        </Layout>
      </main>
    </>
  );
};

export default Login;
