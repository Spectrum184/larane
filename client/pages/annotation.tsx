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

export default Annotation;
