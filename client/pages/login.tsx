import LoginContainer from '~/containers/LoginContainer';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer />
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

export default Login;
