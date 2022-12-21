import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="main">
      <h1 className="title">404</h1>
      <p>
        The page you were looking for could not be found. <br />
        <Link className="main-link" href={"/"}>
          Go back home
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
