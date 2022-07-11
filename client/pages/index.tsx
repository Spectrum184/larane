import HomeContainer from '~/containers/HomeContainer';
import { userService } from '~/services';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Home Page</title>
      </Head>
      <HomeContainer />
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

  res.setHeader('Cache-Control', 's-maxage=86400');

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Home;
