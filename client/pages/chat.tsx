import ChatContainer from '~/containers/ChatContainer/ChatContainer';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Chat: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <ChatContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Chat;
