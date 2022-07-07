import RegisterContainer from '~/containers/RegisterContainer';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterContainer />
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
export default Register;
