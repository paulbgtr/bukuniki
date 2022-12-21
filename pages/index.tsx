import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Container from "react-bootstrap/Container";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>bukuniki / home</title>
        <meta name="description" content="Online readin journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Container className="col-12">
          <h1 className={styles.title}>Book journaling made simple.</h1>
          <p className="col-md-6">
            Bukuniki is a web-based reading journal that will help you develop
            your reading habits and store all of your records on a book.
          </p>
          <Button onclick={() => router.push("/coming")} className="me-2">
            Get started, It is free!
          </Button>
          <Button
            onclick={() => router.replace("https://github.com/gibsol/bukuniki")}
          >
            Star on Github ★
          </Button>
        </Container>
      </main>
    </>
  );
};

export default Home;
