import UserGroupContainer from '~/containers/UserGroupContainer';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const UserGroup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <UserGroupContainer />
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

export default UserGroup;
