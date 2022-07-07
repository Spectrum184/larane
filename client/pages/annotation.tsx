import AnnotationContainer from '~/containers/AnnotationContainer';
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
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Annotation;
