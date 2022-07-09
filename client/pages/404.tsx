import NotFoundContainer from '~/containers/NotFoundContainer';
import Head from 'next/head';
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Not Found</title>
      </Head>
      <NotFoundContainer />
    </>
  );
};

export default NotFound;
