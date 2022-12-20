import Head from "next/head";
import Container from "react-bootstrap/Container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>bukuniki / home</title>
        <meta name="description" content="Online readin journal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container>
          <h1 className={styles.title}>bukuniki</h1>
          <p className="col-md-6">
            The main reason for this project is my lack of discipline in terms
            of reading. This app should help people to track their reading
            habits, and easily store all of their thoughts on a book in the app.
          </p>
          <p className="col-md-6">
            Name to start with is Bukuniki. This name is simply derived from the
            words ブック and 日記.
          </p>
        </Container>
      </main>
    </>
  );
}
