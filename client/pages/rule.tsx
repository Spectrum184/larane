import RuleContainer from '~/containers/RuleContainer';
import { userService } from '~/services';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Rule: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rule</title>
      </Head>
      <RuleContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
  res,
  req,
}) => {
  const { status } = await userService.getUser(req.headers.cookie);

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

export default Rule;
