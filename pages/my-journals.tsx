// todo: Add forward to an edit page of a journal
import Head from "next/head";
import Layout from "../components/Layout";
import Journal from "../pageComponents/my-journals/Journal";
import JournalContainer from "../pageComponents/my-journals/JournalContainer";

const MyJournals = () => {
  return (
    <>
      <Head>
        <title>bukuniki / my journals </title>
        <meta name="description" content="your journals of bukuniki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <h1 className="text-4xl text-center mb-2 font-bold">My Journals</h1>
          <JournalContainer>
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
            <Journal href="" title="Anna Karenina" author="Leo Tolstoy" />
          </JournalContainer>
        </Layout>
      </main>
    </>
  );
};

export default MyJournals;
