// todo: add state management and validation for forms

import Head from "next/head";

import Divider from "../components/Divider";
import Layout from "../components/Layout";
import Delete from "../pageComponents/settings/Delete";
import Email from "../pageComponents/settings/Email";
import Password from "../pageComponents/settings/Password";
import SettingsContaier from "../pageComponents/settings/SettingsContainer";
import Username from "../pageComponents/settings/Username";

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
          <h1 className="text-4xl font-bold text-center text-pink-300">
            Settings
          </h1>
          <SettingsContaier header="Account Settings">
            <Username />
            <Divider />
            <Email />
            <Divider />
            <Password />
            <Divider />
            <Delete />
          </SettingsContaier>
        </Layout>
      </main>
    </>
  );
};

export default Settings;
