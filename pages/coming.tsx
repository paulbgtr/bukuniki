import Container from "react-bootstrap/Container";
import Link from "next/link";
import styles from "../styles/Coming.module.scss";

const ComingSoon = () => {
  return (
    <main className="main">
      <Container className="text-center">
        <h1 className={styles.title}>Coming Soon...</h1>
        <p>
          Bukuniki is currently under active development. <br />
          You can follow the development process on our{" "}
          <Link
            className="main-link"
            href={"https://github.com/gibsol/bukuniki"}
          >
            Github
          </Link>{" "}
          page.
        </p>
      </Container>
    </main>
  );
};

export default ComingSoon;
