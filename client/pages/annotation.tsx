import AnnotationContainer from '~/containers/AnnotationContainer';
import { userService } from '~/services';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetServerSideProps } from 'next';

const Annotation: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <AnnotationContainer />
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

export default Annotation;
