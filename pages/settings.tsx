import Head from "next/head";
import Layout from "../components/Layout";
import SettingsContaier from "../pageComponents/settings/SettingsContainer";
import Username from "../pageComponents/settings/Usename";

const Settings = () => {
  return (
    <>
      <Head>
        <title>bukuniki / settings</title>
        <meta name="description" content="Settings of bukuniki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout centered>
          <h1 className="text-3xl font-bold text-center">Settings</h1>
          <SettingsContaier header="Account Settings">
            <Username />
          </SettingsContaier>
        </Layout>
      </main>
    </>
  );
};

export default Settings;
