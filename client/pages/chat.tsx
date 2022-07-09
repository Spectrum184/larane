import ChatContainer from '~/containers/ChatContainer';
import { userService } from '~/services';
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
  res,
}) => {
  const { status } = await userService.getUser();

  if (status >= 400) {
    res.writeHead(302, { Location: '/login' });
    res.end();
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Chat;
